import React from 'react'
import styles from './SectionTitle.module.css'
import {PiDotsNineLight} from 'react-icons/pi'
import { Container } from 'reactstrap'

export const SectionTitle = ({
   title,
   color,
   children
}) => {
  return (
    <Container   dir='rtl' className={`${styles.SectionTitle} mt-5`}>
      <h3 style={{color}} className={styles.Title}>
         <PiDotsNineLight color={color} size={40} />
         <span className='px-2'>{title}</span>
      </h3>
      <div style={{backgroundColor:color}} className={styles.Border}></div>
      <div className={styles.Children}>{children}</div>
    </Container>
  )
}
