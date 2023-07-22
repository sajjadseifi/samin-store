import React from 'react'
import { Grid } from '../../components/Grid/Grid'
import { ProductCard } from '../../components/Card/ProductCard/ProductCard'
import BaseNavigation from '../../Layout/Navigatation/BaseNavigation'
import Slider from '../../components/Slider/Slider'
import data from '../../helper/data'
import { SearchFilter } from '../../components/SearchFilter/SearchFilter'
import { SectionTitle } from '../../components/Section/SectionTitle'
import {TbCategory} from 'react-icons/tb'
import {GiBrokenHeart} from 'react-icons/gi'

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

const likedOption = [
  { value: "liked", label: "پسندیده" },
  { value: "disliked", label: "ناپسندیده" },
  { value: "nolike", label: "بدون وضعیت" },
  { value: "every", label: "همه" },
  
]

const filters = [
  {
    icon:TbCategory,
    name:'category',
    displayName:'دسته بندی',
    options,
  },
  {
    name:'liked',
    displayName:'محبوبیت محصولات',
    options:likedOption,
    icon:GiBrokenHeart
  }
]
const  products =[{},{},{},{},{}]
const LandingPage = () => {
  return (
    <>
      <Slider items={data.slider}/>
      <SectionTitle title='محصولات شرکت سمین'>
          <SearchFilter filters={filters}/>
          <Grid data={products} Component={ProductCard} />
          <div>Paginatetion</div>
      </SectionTitle>
    </>
  )
}


export default LandingPage