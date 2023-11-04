import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          

        </div>

        <ul className='nav-menu'>
                <li onClick={() => {setMenu("Home")}}><Link style={{textDecoration: 'none', color:'black'}}to= '/'>Home</Link>{menu==="Home"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("About Us")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'About Us'>About Us</Link>{menu==="About Us"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("Social Impact")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'Social Impact'>Social Impact</Link>{menu==="Social Impact"? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("Invest")}}><Link  style={{textDecoration: 'none', color:'black'}}to= 'Invest'>Invest</Link>{menu==="Invest" ? <hr/> : <></>}</li>
            </ul>
       </div>
  )
}

export default Navbar