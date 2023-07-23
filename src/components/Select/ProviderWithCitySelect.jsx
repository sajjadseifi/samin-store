import React from 'react'
import { Controller } from 'react-hook-form'
import { ProviderSelect } from './Provider'
import { CitysSelect } from './CitySelect'
import { providers } from '../../helper/data/provider'
import { cities } from '../../helper/data/cities'
import {TextIcon} from '../TextIcon/TextIcon'
import { FaCity } from 'react-icons/fa'

export const ProviderWithCitySelect = ({
   setValue,
   control,
   watch
}) => {
   const provValue = watch('provider')
   const provId = provValue?.value

   return (
      <>
         <div className="my-2">
            <TextIcon IConomponent={FaCity} text="استان شما" />
            <Controller
               className="my-2"
               name="provider"
               control={control}
               rules={{onChange:()=>setValue('city','')}}
               render={({ field }) => (
                  <ProviderSelect {...field} providers={providers}/>
               )}
            />
         </div>
         <div className="my-2">
            <TextIcon IConomponent={FaCity} text="شهر شما" />
            <Controller
               name="city"
               control={control}
               render={({ field }) => (
                  <CitysSelect {...field} 
                     providerId={provId}
                     citiyList={cities}
                  />
               )}
            />
         </div>
      </>
  )
}