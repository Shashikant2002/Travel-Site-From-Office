import React from 'react';
import './Header.css';
import { FiPhoneCall } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';
import { AiFillCloseCircle } from 'react-icons/ai';
import profile from '../../Assets/Image/postThumb.jpg';
// import { Link } from 'react-router-dom';
import Logo from '../../Assets/Image/logo.png';
import Socal from '../Socal/Socal';
import Nav from '../Nav/Nav';
import { FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Header = () => {
    const openContactMobile = () => {
        const contactHeader = document.getElementById('contactHeader');
        contactHeader.classList.add('contentActive');
    }
    const closeContactMobile = () => {
        const contactHeader = document.getElementById('contactHeader');
        contactHeader.classList.remove('contentActive');
    }
    const sidemenuOpen = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.display = 'block';
        sideMenu.children[0].style.right = '0%';
        sideMenu.children[0].style.animation = 'sidemenuInAnim .3s linear'
    }
    const sidemenuClose = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.children[0].style.animation = 'sidemenuInAnim .3s linear'
        sideMenu.style.display = 'none';
        sideMenu.children[0].style.right = '-100%';
    }

    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="topHead flex justifyContentBetween alignItemCenter">
                        <div className="contact flex alignItemCenter">
                            <div className="icon colorWhite" onClick={() => openContactMobile()}>
                                <FiPhoneCall />
                            </div>
                            <div id='contactHeader' className="content">
                                <p className='colorWhite'>For Further Inquires :</p>
                                <h5><a className='colorWhite' href="telto:1234567890">123 456 7890</a></h5>
                                <p onClick={() => closeContactMobile()} className='colorWhite contactClose'><AiFillCloseCircle /></p>
                            </div>
                        </div>
                        <figure className="logo">
                            <img src={Logo} alt="Logo" />
                        </figure>
                        <div className="menuSearch flex alignItemCenter">
                            <div className="search colorWhite flex justifyContentCenter alignItemCenter">
                                <BiSearchAlt2 />
                            </div>
                            <div className="menu colorWhite" onClick={() => sidemenuOpen()}>
                                <CgMenuRight />
                            </div>
                        </div>
                    </div>
                    <div className="mainHeader flex justifyContentBetween alignItemCenter">
                        <Socal />
                        <Nav />
                        <a className='globalBtn' href="/">BOOK NOW</a>
                    </div>
                </div>

                <div className="sideMenu" id='sideMenu'>
                    <div className="menu flex flexDirCol justifyContentCenter alignItemCenter">
                        <span onClick={() => sidemenuClose()} className="close"><AiFillCloseCircle /></span>
                        <div className="asideContent flex flexDirCol justifyContentCenter alignItemCenter">
                            <h5>OUR PROPRIETOR</h5>
                            <figure className="profile">
                                <img src={profile} alt="ProfileImage" />
                            </figure>
                            <h4>James Watson</h4>
                            <p className='textAlignCenter'>Accumsan? Aliquet nobis doloremque, aliqua? Inceptos voluptatem, duis tempore optio quae animi viverra distinctio cumque vivamus, earum congue, anim velit</p>
                            <Socal />
                            <h5>CONTACT US</h5>

                            <div className="content textAlignCenter">
                                <p>Feel free to contact and reach us !!</p>
                                <p className='flex alignItemCenter justifyContentCenter'><FiPhoneCall /> +01(988) 256 203</p>
                                <p className='flex alignItemCenter justifyContentCenter'><FiMail /> info@domain.com</p>
                                <p className='flex alignItemCenter justifyContentCenter'><HiOutlineLocationMarker /> 3146 Koontz, California</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header