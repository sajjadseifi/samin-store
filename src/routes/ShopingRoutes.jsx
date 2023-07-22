import React from 'react'
import { Route, Routes } from 'react-router'
import { ShoppingCardPage } from '../pages/Shopping/ShoppingCardPage'
import { CompletePurchasePage } from '../pages/Shopping/CompletePurchasePage'
import { RedirectTo404 } from './RedirectTo404'

export const ShopingRoutes = () => {
   console.log("RRRR")
   return (
      <Routes>
         <Route path="/card" Component={ShoppingCardPage} />
         <Route path="/complete-purchase" Component={CompletePurchasePage} />
         <Route path="*" Component={RedirectTo404} />
      </Routes>
   )
}
