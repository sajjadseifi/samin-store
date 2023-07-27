import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardSubtitle, CardTitle, Col,  Container,  Row } from 'reactstrap'
import {v1 as genId} from 'uuid'
import { ProductBagCard } from './ProductBagCard';
export const BagCard = ({
   date,
   name,
   localAddress,
   provider,
   city,
   products = [],
}) => {
   const [open, setOpen] = useState('');
   const toggle = (id) => {
     if (open === id) {
       setOpen();
     } else {
       setOpen(id);
     }
   };
   const totalPrices = products.reduce((prv,cur)=>prv + (cur.counts * cur.product.price),0)
   return (
      <Container style={{margin:10}}>
         <Accordion flush open={open}  toggle={toggle}>
            <AccordionItem>
               <Card>
                  <AccordionHeader targetId='1' >
                           <Row 
                              xs="1" 
                              md="1" 
                              lg="4"
                              style={{width:'100%',textAlign:'center'}}
                           >
                              <Col>صاحب : {name}</Col>
                              <Col>مقصد : {provider} , {city}</Col>
                              <Col>مجموع : {totalPrices} ریال</Col>
                              <Col>تعداد : {products.reduce((prv,cur)=>prv + cur.counts,0)}</Col>
                           </Row>
                  </AccordionHeader>
               </Card>
               <AccordionBody accordionId='1'>
                  <CardTitle tag="h4">جزئیات خرید</CardTitle>
                  <CardSubtitle className='my-2'>
                     <Row style={{color:'red'}}>
                        <Col>ادرس دستی</Col>
                        <Col>:</Col>
                        <Col>{localAddress}</Col>
                     </Row>
                  </CardSubtitle>
                  <CardSubtitle className='my-2'>
                     <Row style={{color:'green'}}>
                        <Col>تاریخ ثبت</Col>
                        <Col>:</Col>
                        <Col>{new Date(date).toUTCString()}</Col>
                     </Row>
                  </CardSubtitle>
                  <CardTitle tag="h4">محصولات این بسته</CardTitle>
                  {products.map(({product,counts})=><ProductBagCard {...product} counts={counts}/>)}
               </AccordionBody>
            </AccordionItem>
         </Accordion>
      </Container>

  )
}
