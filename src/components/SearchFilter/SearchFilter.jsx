import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'
import { SelectFilter } from './SelectFilter';
import { FilterItem } from './FilterItem';
import {AiOutlineFileSearch} from 'react-icons/ai'
import { useLocation, useSearchParams } from 'react-router-dom';
import {  useUpdateSearchParam } from '../../helper/hook/updateSearchParam';


export const SearchFilter = ({
   onResult = (searchOpt) => {},   
   filters = {}
}) => {
   const [search,setSearch] = useState('')
   const [filtersResult,setFiltersResult] = useState({})
   const loc = useLocation()
   const updateParam = useUpdateSearchParam()

   const onSetFilterHandler = (newValue,name)=> {
      setFiltersResult(prev => ({
         ...prev,
         [name] : newValue
      }))
   }
   
  const onResultHandler = () => {
      const filtersValue  = Object
      .keys(filtersResult)
      .reduce((prv,cur)=>({
         ...prv,
         [cur] : filtersResult[cur]?.value
      }),{})
      const query = {
         ...filtersValue,
         search:search,
      }
      updateParam(query)
  }

  
  useEffect(()=> {
      onResultHandler()
  },[search,filtersResult,loc.search])

  const flst = Object.keys(filters).map((key)=>({
      ...filters[key],
      name : key
  }))
  return (
    <Container className='bg-red broder-round'>
      <Row xs="2"  dir='rtl'>
      {flst.map((filter)=> (
         <SelectFilter {...filter} 
            handler={onSetFilterHandler} 
            value={(name)=>filtersResult[name]}
         />
      ))}
      <FilterItem icon={AiOutlineFileSearch} title='عبارت جستوجو'>
         <Col className='d-flex align-items-center'>
            <Input
               outline
               placeholder='عبارت جستو رو بنویسید...'
               onChange={e=> setSearch(e.target.value)}
               className='flex-1' 
               type='text'
            />
            <Button onClick={onResultHandler} color='info'>جستوجو</Button>
         </Col>
      </FilterItem>
      </Row>
    </Container>
  )
}
