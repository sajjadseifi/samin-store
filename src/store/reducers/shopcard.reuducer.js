import { createSlice } from '@reduxjs/toolkit'
import { shoppingCard } from '../../helper/data/shoppingcard'
import { users } from '../../helper/data/users'
import { products } from '../../helper/data/product'

const initialState = {
   _data: shoppingCard,
   shopCard: [],
   bags: [],
}

export const shoppCardSlice = createSlice({
   name: 'shopp-card',
   initialState: initialState,
   reducers: {
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
         const shopcard = [...userCards["null"]]
         delete userCards["null"]
         console.log({ shopcard })
         state.shopCard = shopcard
         state.bags = userCards
      },

   },
})

export const { loadMyCards } = shoppCardSlice.actions

export default shoppCardSlice.reducer