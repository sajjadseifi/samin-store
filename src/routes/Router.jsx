import React from 'react'
import { Route, Routes } from 'react-router'
import NotFoundPage from '../pages/NodFoundPage'
import LandingPage from '../pages/Landing/LandingPage'
import { ShopingRoutes } from './ShopingRoutes'
import { RedirectTo404 } from './RedirectTo404'

export const Router = () => {
   return (
      <Routes>
         <Route path="/" Component={LandingPage} />
         <Route path="/shopping/*" element={<ShopingRoutes/>} />
         <Route path="/404" Component={NotFoundPage} />
         <Route path="*" Component={RedirectTo404} />
      </Routes>
   )
}