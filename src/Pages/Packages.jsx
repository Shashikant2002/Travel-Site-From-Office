import React from 'react';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import bannerImg from '../Assets/Image/bannerBackground_1.jpg';
import PopDestCard from '../components/popDestCard/PopDestCard';
import destImg from '../Assets/Image/popular_Dest.jpg'
import Counter from '../components/Counter/Counter';
import CallToAction from '../components/callToAction/CallToAction';
import Package from '../components/packag/Package';

const Packages = () => {
    return (
        <>
            <div className="packages">
                <SectionBanner image={bannerImg} heading={"TOUR PACKAGES"} />
                <div className="container">

                    <div className="pack flex flexWrap justifyContentCenter commonSection">
                        <Package />
                        <Package />
                        <Package />
                        <Package />
                        <Package />
                        <Package />
                    </div>
                    <Counter />
                </div>
                <CallToAction />
            </div>
        </>
    )
}

export default Packages