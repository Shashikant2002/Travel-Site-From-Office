import React from 'react';
import "./intro.css"
import bannerImg from '../../Assets/Image/bannerBackground_1.jpg';
import clientimg1 from '../../Assets/Image/client-img1.png';
import { FaUmbrellaBeach } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const OurIntro = () => {
    return (
        <>
            <div className="intro commonSection">
                <div className="container">
                    <article className='mainContent'>
                        <figure className="figContent">
                            <img src={bannerImg} alt="" />
                            <h4 className='colorWhite textAlignCenter'>WE ARE BEST FOR TOURS & TRAVEL SINCE 1985 !</h4>
                        </figure>
                        <h3>HOW WE ARE BEST FOR TRAVEL !</h3>
                        <p>Dictumst voluptas qui placeat omnis repellendus, est assumenda dolores facilisis, nostra, inceptos. Ullam laudantium deserunt duis platea. Fermentum diam, perspiciatis cupidatat justo quam voluptate, feugiat, quaerat. Delectus aute scelerisque blanditiis venenatis aperiam rem. Tempore porttitor orci eligendi velit vel scelerisque minus scelerisque? Dis! Aenean! Deleniti esse aperiam adipiscing, sapiente?</p>
                        <p>Ratione conubia incididunt nullam! Sodales, impedit, molestias consectetuer itaque magni ut neque, lobortis expedita corporis voluptatem natus praesent mollis quidem auctor curae, mattis laboris diamlorem iure nullam esse? Pariatur primis.</p>

                        <div className="slider">
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                arrows={false}
                                className="slides">
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                                <figure className="slide textAlignCenter">
                                    <img src={clientimg1} alt="" />
                                </figure>
                            </Carousel>
                        </div>
                    </article>
                    <aside className="cardContent">
                        <div className="cards">
                            <div className="card textAlignCenter">
                                <div className="icon colorWhite">
                                    <FaUmbrellaBeach />
                                </div>
                                <h4>AFFORDABLE TOURS</h4>
                                <p>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                            </div>
                            <div className="card textAlignCenter">
                                <div className="icon colorWhite">
                                    <FaUmbrellaBeach />
                                </div>
                                <h4>AFFORDABLE TOURS</h4>
                                <p>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                            </div>
                            <div className="card textAlignCenter">
                                <div className="icon colorWhite">
                                    <FaUmbrellaBeach />
                                </div>
                                <h4>AFFORDABLE TOURS</h4>
                                <p>Iure doloremque saepe? Ultrices mi aliquam dis tempore incididunt sint, cumque dis temp!</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default OurIntro