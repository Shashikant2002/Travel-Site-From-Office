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
import { FaBars } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Header = () => {
    // For contact in mobile Screen
    const openContactMobile = () => {
        const contactHeader = document.getElementById('contactHeader');
        contactHeader.classList.add('contentActive');
    }
    const closeContactMobile = () => {
        const contactHeader = document.getElementById('contactHeader');
        contactHeader.classList.remove('contentActive');
    }
    // Side Menu
    const sidemenuOpen = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.classList.add('showSideMenu');
        sideMenu.children[0].style.right = '0%';
    }
    const sidemenuClose = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.classList.remove('showSideMenu');
        sideMenu.children[0].style.right = '-100%';
    }
    // Serach box
    const openSearchBox = () => {
        const searchBox = document.getElementById('searchBox');
        searchBox.classList.add('searchBoxActive');
    }
    const closeSearchBox = () => {
        const searchBox = document.getElementById('searchBox');
        searchBox.classList.remove('searchBoxActive');
    }

    // Nav on Phone
    const openNav = () => {
        const nav = document.getElementById('nav');
        nav.classList.add('activeNav');
    }

    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="topHead flex justifyContentBetween alignItemCenter">
                        <div className="contact flex alignItemCenter">
                            <div className="icon colorWhite flex" onClick={() => openContactMobile()}>
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
                                <span onClick={() => openSearchBox()} className='flex justifyContentCenter alignItemCenter'><BiSearchAlt2 /></span>
                                <div className="searchBox flex justifyContentCenter alignItemCenter" id='searchBox'>
                                    <div onClick={() => closeSearchBox()} className="close">
                                        <AiFillCloseCircle />
                                    </div>
                                    <form action="/" className='flex flexDirCol'>
                                        <input type="text" placeholder='Search Heere' />
                                        <button className='globalBtn' type='sumbit'>Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="menu colorWhite" onClick={() => sidemenuOpen()}>
                                <CgMenuRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainHeader">
                    <div className="container flex justifyContentBetween alignItemCenter">
                        <Socal />
                        <Nav />
                        <a className='globalBtn' href="/">BOOK NOW</a>
                    </div>
                        <div onClick={() => openNav()} className="fafaIcon colorWhite">
                            <FaBars />
                        </div>
                </div>

                <div className="sideMenu" id='sideMenu'>
                    <div className="menu flex flexDirCol justifyContentCenter alignItemCenter">
                        <span onClick={() => sidemenuClose()} className="close"><AiFillCloseCircle /></span>
                        <div className="asideContent flex flexDirCol justifyContentCenter alignItemCenter">
                            <h5>OUR PROPRIETOR</h5>
                            <figure className="profile flex">
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