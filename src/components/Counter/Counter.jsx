import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
export const Counter = ({
   init = 0,
   maxCountc=null,
   onCahngeValue=(value)=>{},
   ...props
}) => {
  const [counting,setCounting] = useState(init)

  useEffect(()=> {
      onCahngeValue(counting)
  },[counting])

  useEffect(()=> {
      setCounting(init)
  },[init])
  
   return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <span>تعداد</span>
      <AiOutlinePlus color='green' size={30} className='mx-2' onClick={()=>setCounting(c => !!maxCountc && c + 1 > maxCountc ?  c: c + 1)}/>         
      <Input
         style={{
            width:40,
            textAlign:'center'
         }}
         outline
         onChange={e=> setCounting(e.target.value)}
         {...props}
         value={counting}
      />
      <AiOutlineMinus color='red' size={30} className='mx-2'  onClick={()=>setCounting(c => c - 1 < 0 ? 0 : c - 1)} />         
    </div>
  )
}
