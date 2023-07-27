import React, { useEffect } from 'react'
import { FilterItem } from './FilterItem'
import Select from "react-select";

export const SelectFilter = ({
   name,
   icon,
   displayName,
   default : defaultValue,
   options,
   handler,
   value : valueGetter = (name) => {} 
}) => {

   useEffect(()=> {
      const value = options.find((o)=>o.value == defaultValue)
      if(value) handler(value,name)
   },[options])
  return (
   <FilterItem title={displayName} icon={icon}>
      <Select 
         placeholder={displayName}
         onChange={value => handler(value,name)}
         options={options} 
         value={valueGetter(name)} 
      />
   </FilterItem>
   )
}
