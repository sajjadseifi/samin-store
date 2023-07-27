import React from 'react'
import { Card, CardImg, CardText, Col, Row } from 'reactstrap'
import { Counter } from '../../Counter/Counter'
import { changeCountCard } from '../../../store/reducers/shopcard.reuducer'
import { useDispatch } from 'react-redux'

export const ShoppingCard = ({
   user,
   product,
   counts,
   counterProps ={},
}) => {
   const dispatch = useDispatch()
  return (

         <Card className='w-100 p-2 my-2'>
            <Row 
               xs="1" 
               md="2" 
               lg="6"
               className='align-items-center'
            >
               <Col>
                     <img 
                        width={60} 
                        height={60} 
                        src={product.imageSrc}
                     />
               </Col>
               <Col>
                  <CardText>{product.subject}</CardText>
               </Col>
               <Col>{product.price}</Col>
               <Col>{product.price_off ?"تخفیف : " + product.price_off : "تخفیف ندارد"}</Col>
               <Col> تعداد موجود :{product.counts}</Col>
               <Col>
                  <Counter 
                     init={counts} 
                     onCahngeValue={(counts)=>dispatch(changeCountCard({
                        userId : user.id,
                        productId:product.id,
                        counts
                     }))}
                  />
               </Col>

            </Row>
 
         </Card>

  )
}
