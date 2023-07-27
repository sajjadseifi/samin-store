import React from 'react'
import { Card, CardImg, CardText, Col, Row } from 'reactstrap'

export const ProductBagCard = ({
  imageSrc= 'عکس',
  subject= 'عنوان',
  price_off= 0,
  price= 0,
  counts= 0
}) => {

  return (

         <Card className='w-100 p-2 my-2'>
            <Row 
               xs="1" 
               md="2" 
               lg="5"
               className='align-items-center'
            >
               <Col>
                     <img 
                        width={60} 
                        height={60} 
                        src={imageSrc}
                     />
               </Col>
               <Col><CardText>{subject}</CardText></Col>
               <Col><CardText>{counts} تا</CardText></Col>
               <Col><CardText>{price_off ?? price} ریال</CardText></Col>
               <Col>{!!price_off ? "دارای تخفیف":"بدون تخفیف"}</Col>
            </Row>
         </Card>

  )
}
