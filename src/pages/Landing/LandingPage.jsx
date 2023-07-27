import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/Grid/Grid'
import { ProductCard } from '../../components/Card/ProductCard/ProductCard'
import Slider from '../../components/Slider/Slider'
import data from '../../helper/data'
import { SearchFilter } from '../../components/SearchFilter/SearchFilter'
import { SectionTitle } from '../../components/Section/SectionTitle'
import { Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  loadAllCategory } from '../../store/reducers/category.reducer'
import { toSelectOption } from '../../utils/array'
import { productAction } from '../../store/reducers/product.reducer'
import { PaginationQuery } from '../../components/Pagination/Pagination'
import { selects } from './constant/select'
import { useGetSearch } from '../../helper/hook/useGetSearch'
import { useSearchParams } from 'react-router-dom'


const LandingPage = () => {
  const category = useSelector(state=>state.category)
  const { dataQuery : products, maxPage } = useSelector(state=>state.product)
  const dispatch = useDispatch()
  const [filters,setFilters] = useState(selects)
  const [params] = useSearchParams({
    page: 0,
    pageCount:2,
    search : '',
    category : null
  })  
  const getParams = useGetSearch()
  useEffect(()=> {
    dispatch(loadAllCategory())
  },[])
  
  useEffect(()=>{
    let catOptions = toSelectOption(
      category.list,
      'id',
      'name'
    )
    catOptions = [{label:'همه',value:0},...catOptions]
    setFilters(prev=> ({
      ...prev,
      category : {
        ...prev.category,
        options : catOptions,
      }
    }))
  },[category.list])

    useEffect(()=>{
    const q = getParams()
    dispatch(productAction.query({
      page:+q.page,
      search:q.search,
      filter : {
        category:+q.category,
        pageCount:+q.pageCount,
      }
    }))

  },[params])
  return (
    <>
    <Container className='py-2'>
      <SectionTitle title='تبلیغات'>
        <div style={{
          borderRadius:20,
          overflow:'hidden'
        }}>
          <Slider items={data.slider}/>
        </div>
    </SectionTitle>

    </Container>
    <SectionTitle title='محصولات شرکت سمین'>
        <SearchFilter  filters={filters}/>
        <Grid data={products} Component={ProductCard} />
        <Container
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          padding:20
        }}
        >
          <PaginationQuery maxPage={maxPage} />
        </Container>
    </SectionTitle>
    </>
  )
}


export default LandingPage