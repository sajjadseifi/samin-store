import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import {  Pagination,PaginationItem, PaginationLink } from 'reactstrap'
import qs from 'query-string'
import { useUpdateSearchParam } from '../../helper/hook/updateSearchParam'
import { useParam } from '../../helper/hook/useParam'

const PaginationQueryItem = ({page,...props}) =>{
  const updateParam = useUpdateSearchParam()
  const [_page] = useParam('page')

  const onQuery = () => updateParam({ page })
  

  const isProps = Object.keys(props).length > 0

  return (
    <PaginationItem active={!isProps && _page == page} onClick={onQuery}>
      {isProps ? (
        <PaginationLink {...props}/>
      ):(
      <PaginationLink>
        {page}
      </PaginationLink>
      )}
      
    </PaginationItem>   
  ) 
}
const createPagteArray =(start=0,count=0)=>{
  return Array(count ?? 0)
    .fill(start)
    .map((val,idx)=>val + idx)

}
export const PaginationQuery = ({ maxPage }) => {
  const [leftPages,setLeftPage] = useState([])
  const [rightPage,setRightPage] = useState([])
  const [dot,setDot] = useState(false)
  const [page,updatePage] = useParam('page')

  const iPage = +page
  const prev = iPage > 1 ? iPage - 1 : maxPage  
  const next = iPage < maxPage ? iPage + 1 : 1

  useEffect(()=>{
    setLeftPage(createPagteArray(1,Number(maxPage) || 0))
    setDot(false)
    if (!page) updatePage(1)

  },[maxPage])


return (
<Pagination dir='ltr'>
  <PaginationQueryItem first page={prev}/>
  {leftPages.map((page)=><PaginationQueryItem page={page}/>)}
  {dot && (
    <PaginationItem disabled>
      <PaginationLink>
        ...
      </PaginationLink>
    </PaginationItem>       
  )}

  {rightPage.map((page)=><PaginationQueryItem page={page}/>)}
  <PaginationQueryItem last page={next}/>

</Pagination>
  )
}
