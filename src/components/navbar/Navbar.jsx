import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css'

const Menu = () => {
  return (
    <>
    <p><a href='#home'></a>Home</p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'></a>Open AI</p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'></a>Blogs</p>
    </>
  )
}

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> }

        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='gpt3__navbar-menu_container-sign'>
              <p>Sign In</p>
              <button>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar