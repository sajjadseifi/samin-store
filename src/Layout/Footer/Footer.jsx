import React from 'react'
import { FcLike } from 'react-icons/fc'

export const Footer = () => {
  return (
   <footer 
      style={{
         backgroundColor:'darkmagenta',
         color:'white',
         textAlign:'center',
         padding:'20px'
      }}
   >
      Powered By Testing React Developer {<FcLike/>} Samin Ray
   </footer>
  )
}
