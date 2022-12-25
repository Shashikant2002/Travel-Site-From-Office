import React from 'react';
import './banner.css';


const SectionBanner = ({image, heading}) => {
    return (
        <>
            <div className="pagesBanner" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div className="content textAlignCenter">
                    <h2 className='colorWhite'>{heading}</h2>
                </div>
            </div>
        </>
    )
}

export default SectionBanner