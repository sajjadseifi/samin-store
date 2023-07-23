import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import catReducer from './reducers/category.reducer'
import productReducer from './reducers/product.reducer'
import shopcardReducer from './reducers/shopcard.reuducer'

export default configureStore({
   reducer: {
      auth: authReducer,
      category: catReducer,
      product: productReducer,
      shopcard: shopcardReducer,
   },
})