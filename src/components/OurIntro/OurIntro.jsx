import React from 'react';
import "./intro.css"
import bannerImg from '../../Assets/Image/bannerBackground_1.jpg';

const OurIntro = () => {
    return (
        <>
            <div className="intro commonSection">
                <div className="container">
                    <article className='mainContent'>
                        <figure className="figContent">
                            <img src={bannerImg} alt="" />
                            <h4>WE ARE BEST FOR TOURS & TRAVEL SINCE 1985 !</h4>
                        </figure>
                    </article>
                    <aside className="cardContent">
                        sdfsds
                    </aside>
                </div>
            </div>
        </>
    )
}

export default OurIntro