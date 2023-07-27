import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,

} from 'reactstrap';
import Logo from '../../assets/images/logo.png'
import {RiNotification3Line} from 'react-icons/ri'
import {FiShoppingBag} from 'react-icons/fi'
import { TextIcon } from '../../components/TextIcon/TextIcon';
import {NavLink as Link} from 'react-router-dom'

const NavItemLink = ({
   to,
   children,
   ...props
}) => <NavItem>
      <NavLink>
         <Link 
            style={{textDecoration:'none'}}
            to={to} 
            {...props}
          >{children}
         </Link>
      </NavLink>
   </NavItem>


function BaseNavigation(args) {
  return (
      <Navbar className='px-5' dir='rtl' {...args}>
         <NavbarBrand href="/">
            <img src={Logo} width={40} height={40}  />
            <span className='mx-2'>فروشگاه سمین</span>
         </NavbarBrand>
         <Nav>
            <NavItemLink to="/">صفحه اصلی</NavItemLink>
            <NavItemLink to="/products">محصولات</NavItemLink>
            <NavItemLink to="/about-us">درباره ما</NavItemLink>
         </Nav>
         <Nav>
            <NavItemLink to="#"><TextIcon color='chocolate' text="اعلان ها" IConomponent={RiNotification3Line} /></NavItemLink>
            <NavItemLink to="/shopping/card"><TextIcon color='crimson' text="سبد خرید" IConomponent={FiShoppingBag} /></NavItemLink>
         </Nav>
      </Navbar>
  );
}

export default BaseNavigation;