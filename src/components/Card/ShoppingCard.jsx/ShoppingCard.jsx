import React from 'react'
import { Card, CardImg, CardText, Col, Row } from 'reactstrap'
import { Counter } from '../../Counter/Counter'

export const ShoppingCard = ({
   user,
   product,
   counts,
}) => {

  return (

         <Card className='w-100 p-2 my-2'>
            <Row 
               xs="1" 
               md="2" 
               lg="6"
               
            >
               <Col>
                  <CardImg width={40} height={40} src={product.imageSrc}/>
               </Col>
               <Col>
                  <CardText>{product.subject}</CardText>
               </Col>
               <Col>
               <CardText>
                  {product.description.length > 40 ? 
                     product.description.slice(0,17) + "...":
                     product.description
                  }
               </CardText>
               </Col>
               <Col>
                  <CardText>{product.price}</CardText>
               </Col>
               <Col>
                  <CardText>
                     {product.price_off ?
                        "تخفیف" + product.price_off:
                        "تخفیف ندارد"
                     }
                  </CardText>
               </Col>
               <Col>
               <CardText>
                  تعداد موجود
                  {product.counts}
                  </CardText>
               </Col>
               <Col className='w-100'>
                  <Counter/>
               </Col>
            </Row>
         </Card>

  )
}
