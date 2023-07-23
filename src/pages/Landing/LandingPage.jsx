import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/Grid/Grid'
import { ProductCard } from '../../components/Card/ProductCard/ProductCard'
import Slider from '../../components/Slider/Slider'
import data from '../../helper/data'
import { SearchFilter } from '../../components/SearchFilter/SearchFilter'
import { SectionTitle } from '../../components/Section/SectionTitle'
import {TbCategory} from 'react-icons/tb'
import {GiBrokenHeart} from 'react-icons/gi'
import { Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  loadAllCategory } from '../../store/reducers/category.reducer'
import { toSelectOption } from '../../utils/array'
import { productAction } from '../../store/reducers/product.reducer'
import { PaginationComponnet } from '../../components/Pagination/Pagination'
import { GoNumber } from 'react-icons/go'

const selects = {
  like : {
    displayName:'محبوبیت محصولات',
    options:[],
    icon:GiBrokenHeart
  },
  category : {
    displayName:'دسته بندی محصولات',
    options:[],
    icon:TbCategory
  },
  pageCount : {
    displayName:'تعداد محصول در صفحه',
    options:[
      {value:5,label:'5'},
      {value:10,label:'10'},
      {value:20,label:'20'},
    ],
    default:5,
    icon:GoNumber
  },
}

const LandingPage = () => {
  const category = useSelector(state=>state.category)
  const products = useSelector(state=>state.product.dataQuery)
  const dispatch = useDispatch()

  const [filters,setFilters] = useState(selects)
  useEffect(()=> {
    // dispatch
    // load category
    dispatch(loadAllCategory())
    dispatch(productAction.query({}))
  },[])
  
  useEffect(()=>{
    const catOptions = toSelectOption(
      category.list,
      'id',
      'name'
    )

    setFilters(prev=> ({
      ...prev,
      category : {
        ...prev.category,
        options : catOptions
      }
    }))
  },[category.list])

  
  const onSearchHandler = (searchFilter) => {
    dispatch(productAction.query({
      ...searchFilter,
      page  : 1
    }))
    
  }
  return (
    <>
    <Container className='py-2'>
      <div style={{
        borderRadius:20,
        overflow:'hidden'
      }}>
        <Slider items={data.slider}/>
      </div>
    </Container>
    <SectionTitle title='محصولات شرکت سمین'>
        <SearchFilter onResult={onSearchHandler} filters={filters}/>
        <Grid data={products} Component={ProductCard} />
        <Container
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          padding:20
        }}
        >
          <PaginationComponnet/>
        </Container>
    </SectionTitle>
    </>
  )
}


export default LandingPage