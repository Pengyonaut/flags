import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from "../assets/images/logo.svg"
import MenuIcon from './MenuIcon';

function Header({quizzOngoing}) {

  return (
      <Navbar className='bg-white'>
        <NavbarBrand href="/">
            <img className='logo' src={Logo}/>
        </NavbarBrand>
          <Nav navbar>
            <NavItem className="d-flex justify-content-end me-auto">
              <NavLink href="/components/">
                <MenuIcon text={"test"} icon={"close"} hasText={false} actionOnClick={undefined} />
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
  );
}

export default Header;