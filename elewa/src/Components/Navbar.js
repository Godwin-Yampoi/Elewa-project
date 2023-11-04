import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navbar Component
 * Represents the navigation bar of the website.
 *
 * This component provides navigation links and highlights the currently selected menu item.
 */
const Navbar = () => {
  // Use state to track the active menu item
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* Logo or branding elements can be added here */}
      </div>

      <ul className='nav-menu'>
        {/* Home Menu Item */}
        <li onClick={() => { setMenu("Home") }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>

        {/* About Us Menu Item */}
        <li onClick={() => { setMenu("About Us") }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='About Us'>About Us</Link>
          {menu === "About Us" ? <hr /> : <></>}
        </li>

        {/* Social Impact Menu Item */}
        <li onClick={() => { setMenu("Social Impact") }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='Social Impact'>Social Impact</Link>
          {menu === "Social Impact" ? <hr /> : <></>}
        </li>

        {/* Invest Menu Item */}
        <li onClick={() => { setMenu("Invest") }}>
          <Link style={{ textDecoration: 'none', color: 'black' }} to='Invest'>Invest</Link>
          {menu === "Invest" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
