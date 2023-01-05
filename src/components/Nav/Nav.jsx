import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './nav.css';


const openMenu = (i) => {
  let level = document.querySelectorAll('.nav .level_2');
  level[i].classList.toggle('level_2Active');
  for (let j = 0; j < level.length; j++) {
    if (j == i) {
    } else {
      level[j].classList.remove('level_2Active');
    }
  }
}

const Nav = () => {

  const closeNav = () => {
    const nav = document.getElementById('nav');
    nav.classList.remove('activeNav');
  }
  return (
    <>
      <div className="nav" id='nav'>
        <div onClick={() => closeNav()} className="navClose"><AiFillCloseCircle /></div>
        <ul className='flex'>
          <li><Link onClick={closeNav} className='colorWhite flex justifyContentCenter alignItemCenter' to="/">HOME</Link></li>
          <li><Link onClick={closeNav} className='colorWhite flex justifyContentCenter alignItemCenter' to="/about">ABOUT US</Link></li>
          <li><Link onClick={closeNav} className='colorWhite flex justifyContentCenter alignItemCenter' to="/destination">DESTINATION</Link></li>
          <li><p onClick={() => openMenu(0)} className='colorWhite flex justifyContentCenter alignItemCenter dropDownMenu'>PACKAGES <BiCaretDown /></p>
            <ul className='level_2'>
              <li><Link onClick={closeNav} to="/packages">PACKAGES</Link></li>
              <li><Link onClick={closeNav} to="/">HOME</Link></li>
            </ul>
          </li>
          <li><Link onClick={closeNav} className='colorWhite flex justifyContentCenter alignItemCenter' to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav