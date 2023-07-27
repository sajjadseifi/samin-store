import { GiBrokenHeart } from 'react-icons/gi'
import { TbCategory } from 'react-icons/tb'
import { GoNumber } from 'react-icons/go'

export const selects = {
   like: {
      displayName: 'محبوبیت محصولات',
      options: [],
      icon: GiBrokenHeart
   },
   category: {
      displayName: 'دسته بندی محصولات',
      options: [],
      default: 0,
      icon: TbCategory
   },
   pageCount: {
      displayName: 'تعداد محصول در صفحه',
      options: [
         { value: 2, label: '2' },
         { value: 5, label: '5' },
         { value: 10, label: '10' },
         { value: 20, label: '20' },
      ],
      default: 2,
      icon: GoNumber
   },
}