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
            qdata = qdata.filter((p) => {
               const ok = catList.includes(p.categoryId)
               return ok
            })
         }
         if (search) {
            let s = `${search}`.trim()
            qdata = qdata.filter((p) => p.subject == s)
         }
         console.log({
            category,
            limit,
            offset,
            search
         })
         state.dataQuery = qdata

      }
   },
})

export const productAction = productSlice.actions

export default productSlice.reducer