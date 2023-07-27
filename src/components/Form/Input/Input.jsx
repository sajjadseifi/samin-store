import React from 'react'
import { TextIcon } from '../../TextIcon/TextIcon'
import { Input } from 'reactstrap'
import { Controller } from 'react-hook-form'

export const InputForm = ({
   control,
   name,
   title,
   IConomponent,
   errors,
   ...props
}) => {
  
  return (
    <>
      <TextIcon IConomponent={IConomponent} text={title} />
      <Controller
         className="my-2"
         name={name}
         control={control}
         render={({ field }) => (
            <Input 
               className="my-2" 
               {...field}
            />
         )}
      />
      {<div style={{color:'red'}}>{errors[name]?.message}</div>}
    </>
  )
}
