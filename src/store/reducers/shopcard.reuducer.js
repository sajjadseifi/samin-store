import { createSlice } from '@reduxjs/toolkit'
import { shoppingCard } from '../../helper/data/shoppingcard'
import { users } from '../../helper/data/users'
import { products } from '../../helper/data/product'
import { bags } from '../../helper/data/bags'
import { v1 as genId } from 'uuid'
const initialState = {
   _data: shoppingCard,
   _bagsData: bags,
   shopCard: [],
   bags: [],
}

export const shoppCardSlice = createSlice({
   name: 'shopp-card',
   initialState: initialState,
   reducers: {
      addToBag: (state, action) => {
         const id = genId()
         const date = new Date()
         const bag = action.payload

         state._bagsData.push({
            ...bag,
            id: id,
            date: date,
         })

         const userId = localStorage.getItem('token')
         state._data = state._data.map(d => {
            if (d.userId != userId || d.bagId != null)
               return d

            return { ...d, bagId: id }
         })
      },
      loadMyCards: (state) => {
         const userId = localStorage.getItem('token')
         const userCards = state._data.reduce((prv, cur) => {
            if (cur.userId != userId) return prv
            const ucur = {
               user: users.find(u => u.id == cur.userId),
               product: products.find(p => p.id == cur.productId),
               counts: cur.counts,
            }
            const rowId = cur.bagId ?? "null"
            prv[rowId] = prv[rowId] ? prv[rowId] : []
            prv[rowId].push(ucur)
            return { ...prv }
         }, {
         })
         const shopcard = [...(userCards["null"] ?? [])]
         delete userCards["null"]
         state.shopCard = shopcard
         state.bags = Object.keys(userCards).map((key) => {
            const bagItem = state._bagsData.find(bag => bag.id == key) ?? {}
            return {
               ...bagItem,
               products: userCards[key]
            }
         })
      },
      changeCountCard: (state, action) => {
         const { userId, productId, counts } = action.payload
         const cardIdx = state._data.findIndex(d => (
            d.userId == userId &&
            d.productId == productId &&
            d.bagId == null
         ))
         if (cardIdx != -1) {
            const _data = [...state._data]
            _data[cardIdx].counts = counts
            state._data = _data
         }
      },
      addToCard: (state, action) => {
         const productId = action.payload

         const userId = localStorage.getItem('token')
         const cardIdx = state._data.findIndex(d => (
            d.userId == userId &&
            d.productId == productId &&
            d.bagId == null
         ))
         if (cardIdx == -1) {
            state._data.push({
               bagId: null,
               counts: 1,
               productId,
               userId
            })
         } else {
            state._data = [...state._data]
            state._data[cardIdx].counts += 1
         }
      }
   },
})

export const { loadMyCards, changeCountCard, addToBag, addToCard } = shoppCardSlice.actions

export default shoppCardSlice.reducer