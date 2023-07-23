import React from 'react'

export const EmptyMessage = ({data=[],name}) => {
   if(data.length) 
   {
      return null
   }
   return (
    <div className='p-5 text-center' style={{
      fontSize:25
    }}>
      هیچ {name} پیدا نشد
    </div>
  )
}
