import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useUpdateSearchParam = () => {
   const [searchParams, setSearchParams] = useSearchParams()

   return (query) => {
      const values = searchParams.entries()
      const prv = {}

      for (const [key, value] of values) prv[key] = value
      setSearchParams({ ...prv, ...query })
   }
}
