import React from 'react'
import {  CardText, Col, Row } from 'reactstrap'

export const FilterItem = ({title,icon:Icon,children}) => {
  return (
   <Col className='py-3'>
      <div className='d-flex align-items-center'>
        <span>{Icon && <Icon size={24}/>}</span>
         <span className='px-2'><CardText>{title} : </CardText></span>
      </div>
      <Col className='py-2'>{children}</Col>
   </Col>
  )
}
