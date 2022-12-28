import React from 'react';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import bannerImg from '../Assets/Image/bannerBackground_1.jpg';
import PopDestCard from '../components/popDestCard/PopDestCard';
import destImg from '../Assets/Image/popular_Dest.jpg'
import Counter from '../components/Counter/Counter';
import CallToAction from '../components/callToAction/CallToAction';

const Destination = () => {
    return (
        <>
            <div className="destination">
                <SectionBanner image={bannerImg} heading={"DESTINATION"} />
                <div className="container">

                    <div className="popDestation flex flexWrap justifyContentCenter">
                        <PopDestCard background={destImg} />
                        <PopDestCard background={destImg} />
                        <PopDestCard background={destImg} />
                        <PopDestCard background={destImg} />
                        <PopDestCard background={destImg} />
                        <PopDestCard background={destImg} />
                    </div>
                    <Counter />
                </div>
                <CallToAction />
            </div>
        </>
    )
}

export default Destination