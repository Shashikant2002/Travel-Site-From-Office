import React from 'react';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import bannerImg from '../Assets/Image/bannerBackground_1.jpg';
import ContactCard from '../components/contactCard/ContactCard';
import GetInTouch from '../components/getInTouch/GetInTouch';


const ContactUs = () => {

    return (
        <>
            <div className="destination">
                <SectionBanner image={bannerImg} heading={"CONTACT US"} />

                <GetInTouch />

                <ContactCard />
            </div>
        </>
    )
}

export default ContactUs