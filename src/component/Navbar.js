import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const loginHandler = ()=>{
        navigate('/login');
    }
  return (
    <div className='nav-cont'>
        <div className='logo-sec'>Logo</div>
        <ul className='nav-links'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="products">Products</NavLink></li>
            <li><NavLink to="carrer">Carrer</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </ul>
        <button className='login-btn' onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Navbar