import React from 'react'
import Select from 'react-select'

export const CitysSelect = ({
   showAll = false,
   providerId = null,
   citiyList = [],
   ...props
}) => {
   const citiesFilter = providerId === null 
   ? citiyList :
   citiyList.filter(({province_id})=>province_id == providerId)
   const cityOptnios = citiesFilter
   .map(({id,name})=>({
      value:id, 
      label: name
   }))

   return (
    <Select
      {...props}
      placeholder='یک شهر را انتخاب کنید'
      options={cityOptnios}
    />
  )
}
