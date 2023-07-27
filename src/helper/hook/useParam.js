import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useUpdateSearchParam } from './updateSearchParam'

export const useParam = (name) => {
   const [params] = useSearchParams()
   const updater = useUpdateSearchParam()

   return [params.get(name), (value) => {
      updater({
         [name]: value
      })
   }]
}
