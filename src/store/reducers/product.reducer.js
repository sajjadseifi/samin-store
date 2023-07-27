import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../helper/data/product'
import { getHilevelCategories } from '../../utils/nested'
import { categires } from '../../helper/data/category'

const initialState = {
   data: products,
   dataQuery: []
}
export const productSlice = createSlice({
   name: 'product',
   initialState: initialState,
   reducers: {
      query: (state, action) => {
         const { search, filter, page } = action.payload
         const offset = filter?.pageCount * (page - 1) ?? 0
         const limit = filter?.pageCount ?? 10
         const category = filter?.category
         let qdata = [...state.data]

         if (category) {
            const catList = getHilevelCategories(categires, category)
            qdata = qdata.filter((p) => catList.includes(p.categoryId))
         }

         if (search) {
            const tokens = `${search}`.trim()
               .split(' ')
               .filter(Boolean)
               .map(token => `(?=.*\\b${token}\\b)`)

            const searchTermRegex = new RegExp(tokens.join(''), 'i');

            qdata = qdata.filter((p) => searchTermRegex.test(p.subject))
         }
         const maxPage = Math.ceil(qdata.length / limit)

         let lm = limit
         if (offset + lm >= qdata.length) {
            lm = qdata.length - offset
         }

         qdata = qdata.slice(offset, offset + lm)

         state.dataQuery = qdata
         state.maxPage = maxPage

      }
   },
})

export const productAction = productSlice.actions

export default productSlice.reducer