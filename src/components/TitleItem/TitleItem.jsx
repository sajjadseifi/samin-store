import React from 'react'
import { CardText, Col, Row } from 'reactstrap'

export const TitleItem = ({title,element,children,...props}) => {
  const rendered = element ?? children
  return (
   <Row className='my-2'>
      <Col><CardText>{title}</CardText></Col>
      <Col>{rendered}</Col>
   </Row>   
  )
}
