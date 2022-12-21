import React from 'react';
import './footer.css';
import Logo from '../../Assets/Image/logo.png';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import blog from '../../Assets/Image/postThumb.jpg';
import Socal from '../Socal/Socal';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footContent justifyContentBetween flex flexWrap">
                        <div className="col logoContent">
                            <div className="logo">
                                <img src={Logo} alt="Footer Logo" />
                            </div>
                            <p className='colorWhite'>Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia at perferendis, pretium, aenean aut ultrices.</p>
                        </div>
                        <div className="col">
                            <h5 className='foot_heading colorWhite'>RECENT POST</h5>
                            <div className="blogs content">
                                <a href="/">
                                    <div className="card flex justifyContentCenter alignItemCenter">
                                        <figure className='thumb'>
                                            <img src={blog} alt="blogImage" />
                                        </figure>
                                        <div className="text">
                                            <h6 className='colorWhite'>BEST JOURNEY TO PEACEFUL PLACES</h6>
                                            <small className='colorWhite'>February 17, 2022</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="/">
                                    <div className="card flex justifyContentCenter alignItemCenter">
                                        <figure className='thumb'>
                                            <img src={blog} alt="blogImage" />
                                        </figure>
                                        <div className="text">
                                            <h6 className='colorWhite'>BEST JOURNEY TO PEACEFUL PLACES</h6>
                                            <small className='colorWhite'>February 17, 2022</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <h5 className='foot_heading colorWhite'>CONTACT US</h5>
                            <div className="content">
                                <p className='colorWhite'>Feel free to contact and reach us !!</p>
                                <p className='colorWhite flex alignItemCenter'><FiPhoneCall /> +01(988) 256 203</p>
                                <p className='colorWhite flex alignItemCenter'><FiMail /> info@domain.com</p>
                                <p className='colorWhite flex alignItemCenter'><HiOutlineLocationMarker /> 3146 Koontz, California</p>
                            </div>

                        </div>
                        <div className="col">
                            <h5 className='foot_heading colorWhite'>GALLERY</h5>
                            <div className="content">
                                <div className="gallery flex flexWrap">
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>
                                    <figure className='flex'>
                                        <img src={blog} alt="BlogImage" />
                                    </figure>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="addWithUs flex justifyContentBetween alignItemCenter">
                        <div className="addUs">
                            <p className='colorWhite'>Subscribe our newsletter for more update & news !!</p>
                            <form action="/">
                                <input type="email" placeholder='Enter Your Email'/>
                                <button type='submit' className='globalBorderBtn'>SUBSCRIBE</button>
                            </form>
                        </div>
                        <div className="termSocal">
                            <Socal />
                            <div className="links flex">
                                <a className='colorWhite' href="/">Privacy Policy</a>
                                <p className='colorWhite'>|</p>
                                <a className='colorWhite' href="/">Term & Condition</a>
                                <p className='colorWhite'>|</p>
                                <a className='colorWhite' href="/">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomFot">
                    <p className='colorWhite'>Copyright © 2022 Traveler. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer