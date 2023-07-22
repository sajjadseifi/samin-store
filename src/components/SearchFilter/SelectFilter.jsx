import React from 'react'
import { FilterItem } from './FilterItem'
import Select from "react-select";

export const SelectFilter = ({
   name,
   icon,
   displayName,
   defalut,
   options,
   handler,
   value = (name) => {}
}) => {
  return (
   <FilterItem title={displayName} icon={icon}>
      <Select 
         placeholder={displayName}
         onChange={handler.bind(name)}
         value={value(name) ?? defalut} 
         options={options} 
      />
   </FilterItem>
   )
}
