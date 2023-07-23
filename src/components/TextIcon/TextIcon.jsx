import React from 'react'
import { CardText, Col, Row } from 'reactstrap'

export const TextIcon = ({text,
   icon,
   IConomponent,
   color,
   ...props
}) => {
  return (
   <Col {...props}>
      <div className='d-flex align-items-center m-1'>  
         <span style={{color}}>{text}</span>
         <span className='mx-1'></span>
         {icon ?? (IConomponent && <IConomponent style={{color}} color={color}/>)}
      </div>  
   </Col>
  )
}
