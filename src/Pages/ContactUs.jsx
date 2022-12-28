import React from 'react';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import bannerImg from '../Assets/Image/bannerBackground_1.jpg';

const ContactUs = () => {
    return (
        <>
            <div className="destination">
                <SectionBanner image={bannerImg} heading={"CONTACT US"} />
            </div>
        </>
    )
}

export default ContactUs