import { createSlice } from '@reduxjs/toolkit'
import { linearToNested } from '../../utils/nested'
import { categires } from '../../helper/data/category'

const initialState = {
   _data: categires,
   list: [],
   root: [],
}
export const categorySlice = createSlice({
   name: 'category',
   initialState: initialState,
   reducers: {
      loadAllCategory: (state) => {
         // From Server
         state.list = state._data
      },
      nestedCategory: (state) => {
         const categires = state._data
         const nested = linearToNested(categires)
         state.root = nested.children
      },
   },
})

export const { loadAllCategory, nestedCategory } = categorySlice.actions

export default categorySlice.reducer