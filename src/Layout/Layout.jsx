import React from 'react'
import BaseNavigation from './Navigatation/BaseNavigation'
import { Footer } from './Footer/Footer'

export const Layout = ({children}) => {
  return (
    <>
      <BaseNavigation/>
      <>{children}</>
      <Footer/>
    </>
  )
}
