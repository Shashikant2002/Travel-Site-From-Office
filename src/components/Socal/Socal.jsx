import React from 'react';
import './socal.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const Socal = () => {
  return (
    <>
      <div className="socal flex">
        <div className="icon">
          <a className='colorWhite' href="/"><FaFacebookF /></a>
        </div>
        <div className="icon">
          <a className='colorWhite' href="/"><AiOutlineTwitter /></a>
        </div>
        <div className="icon">
          <a className='colorWhite' href="/"><BsYoutube /></a>
        </div>
      </div>
    </>
  )
}

export default Socal