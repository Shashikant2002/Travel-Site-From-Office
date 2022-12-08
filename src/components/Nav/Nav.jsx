import React from 'react';
import { BiCaretDown } from 'react-icons/bi';
import './nav.css'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <ul className='flex'>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">HOME</a></li>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">ABOUT US</a></li>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">PACKAGES <BiCaretDown /></a>
            <ul className='level_2'>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </li>
          <li><a className='colorWhite flex justifyContentCenter alignItemCenter' href="/">PAGES <BiCaretDown /></a>
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