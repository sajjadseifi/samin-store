import { useSearchParams } from "react-router-dom"

export const useGetSearch = () => {
   const [params] = useSearchParams()

   return () => {
      const values = params.entries()
      const ret = {}
      for (let [key, value] of values)
         ret[key] = value

      return ret
   }
}