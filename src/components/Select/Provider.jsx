import React from 'react'
import Select from 'react-select'

export const ProviderSelect = ({
   providers = [],
   ...props
}) => {

   const providerOptions = providers.map(({id,name})=>({value:id, label: name}))
  
   return (
      <Select
         {...props}
         placeholder='یک شهر را انتخاب کنید'
         options={providerOptions}
      />
  )
}
