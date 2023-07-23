import React, { useEffect } from 'react'
import {SectionTitle} from '../../components/Section/SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyMessage } from '../../components/Message/EmptyMessage'
import { loadMyCards } from '../../store/reducers/shopcard.reuducer'
import { ShoppingCard } from '../../components/Card/ShoppingCard.jsx/ShoppingCard'
import { Button, Container } from 'reactstrap'
import { NavLink } from 'react-router-dom'
 
export const ShoppingCardPage = () => {
  const cards = useSelector(state=> state.shopcard.shopCard)
  const bags = useSelector(state=> state.shopcard.bags)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadMyCards())
  },[])
  console.log({cards})
  return (
    <div>
        <SectionTitle title='سبد خرید من'>
          <EmptyMessage name='کارت' data={cards} />
          {cards.map((card)=><ShoppingCard {...card}/>)}
          <Container dir='ltr'>
            <NavLink to={'/shopping/complete-purchase'}>
              <Button 
                color='secondary'>
                  تکمیل فرایند خرید
              </Button>
            </NavLink>
          </Container>
        </SectionTitle>

        <SectionTitle title='محصولات خریداری شده'>
          <EmptyMessage name='خرید' data={[]} />
        </SectionTitle>
    </div>
  )
}
