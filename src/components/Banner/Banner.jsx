import React from 'react';
import './Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg from '../../Assets/Image/bannerBackground_1.jpg';
import bannerImg1 from '../../Assets/Image/bannerBackground_2.jpg';


const Banner = () => {
    return (
        <section className="banner">
            <Carousel swipeable={false} autoPlay={true} className="allSlides" infiniteLoop={true}>
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${bannerImg1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                    className='slides flex flexDirCol alignItemCenter justifyContentCenter'>
                    <div className="content flex flexDirCol alignItemCenter justifyContentCenter">
                        <h2 className='colorWhite'>BEAUTIFUL PLACE TO VISIT</h2>
                        <p className='colorWhite'>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.</p>
                        <div className="buttons flex">
                            <button className='globalBtn'>LEARN MORE</button>
                            <button className='globalBorderBtn'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${bannerImg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                    className='slides flex flexDirCol alignItemCenter justifyContentCenter'>
                    <div className="content flex flexDirCol alignItemCenter justifyContentCenter">
                        <h2 className='colorWhite'>BEAUTIFUL PLACE TO VISIT</h2>
                        <p className='colorWhite'>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.</p>
                        <div className="buttons flex">
                            <button className='globalBtn'>LEARN MORE</button>
                            <button className='globalBorderBtn'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${bannerImg1})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                    className='slides flex flexDirCol alignItemCenter justifyContentCenter'>
                    <div className="content flex flexDirCol alignItemCenter justifyContentCenter">
                        <h2 className='colorWhite'>BEAUTIFUL PLACE TO VISIT</h2>
                        <p className='colorWhite'>Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.</p>
                        <div className="buttons flex">
                            <button className='globalBtn'>LEARN MORE</button>
                            <button className='globalBorderBtn'>BOOK NOW</button>
                        </div>
                    </div>
                </div>

            </Carousel>
        </section>
    )
}

export default Banner