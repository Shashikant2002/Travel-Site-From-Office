import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import './nav.css'

const Nav = () => {
  const closeNav = () =>{
    const nav = document.getElementById('nav');
    nav.classList.remove('activeNav');
  }
  return (
    <>
      <div className="nav" id='nav'>
        <div onClick={() => closeNav()} className="navClose"><AiFillCloseCircle /></div>
        <ul className='flex'>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">HOME</a></li>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">ABOUT US</a></li>
          <li><p className='colorWhite flex justifyContentCenter alignItemCenter'>PACKAGES <BiCaretDown /></p>
            <ul className='level_2'>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </li>
          <li><p className='colorWhite flex justifyContentCenter alignItemCenter'>PAGES <BiCaretDown /></p>
            <ul className='level_2'>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </li>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">CONTACT US</a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav