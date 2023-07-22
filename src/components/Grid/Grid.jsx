import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export const Grid = ({
   data = [],
   Component,
   responisve= {
      xl:"4",
      lg:"3",
      md:"2",
      sm:"1",
   }
}) => {
  return (
    <Container dir='rtl'>
      <Row {...responisve}>
      {data.map((item)=>(
         <Col>
            <Component {...item}  />
         </Col>
      ))}
      </Row>
    </Container>
  )
}
