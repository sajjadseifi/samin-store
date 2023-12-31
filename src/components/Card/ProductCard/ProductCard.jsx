import React from 'react'
import { 
  Badge,
  Button, 
  Card, 
  CardBody, 
  CardImg, 
  CardSubtitle, 
  CardText, 
  CardTitle,
  Col,
  Row,

} from 'reactstrap'
import { TitleItem } from '../../TitleItem/TitleItem'
import {BiDollar} from 'react-icons/bi'
import {AiFillEye, AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import {BsFillBookmarkFill,BsBookmark} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../../store/reducers/shopcard.reuducer'


export const ProductCard = ({
  id=1,
  imageSrc="https://picsum.photos/318/180",
  subject="Card title",
  description = "This card has supporting text below as a natural lead-in to additional content.",
  price="1000 ریال",
  price_off="990 ریال",
  counts = 10,
}) => {
  const dispatch = useDispatch()

  return (
    <Card className='my-1 h-100'>
    <CardImg
      alt="Card image cap"
      src={imageSrc}
      top
      width="100%"
    />
    <CardBody style={{display:'flex',flexDirection:'column'}}>
      <CardTitle tag="h4">
        {subject}
      </CardTitle>
      <CardText>{description}</CardText>
      <div style={{flex:1}}></div>
      <TitleItem title="وضعیت">
        {counts == 0 ? "ناموجود":"موجود"}
      </TitleItem>
      <TitleItem title="تعداد">{counts|| 0}</TitleItem>
      <TitleItem title="قیمت">
        {!price_off ? (
          <Col dir='ltr'>
            <Badge pill color={"info"} className='w-100'>{price}</Badge>
          </Col>
        ) : (
          <CardText style={{textDecoration:"line-through"}}>{price}</CardText>
        )}
      </TitleItem>
      {price_off && (
        <TitleItem title="تخفیف">
          <Badge color="danger" pill className='w-100' >{price_off}</Badge>
        </TitleItem>
      )}

      <Button
      onClick={()=> {
        dispatch(addToCard(id))
        
      }}
      className='w-100 bold' outline color='success'>
        <span>خرید</span>
        <BiDollar/>
      </Button>
    </CardBody>
  </Card>
  )
}
