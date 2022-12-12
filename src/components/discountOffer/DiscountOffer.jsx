import React from 'react';
import './discount.css';
import SectionHeading from "../SectionHeading/SectionHeading";
import client_1 from '../../Assets/Image/client_1.png'

const DiscountOffer = () => {
    const sectionHeading = {
        topText: "DISCOUNT OFFER",
        heading: "GET SPECIAL DISCOUNT ON SIGN UP !",
        description:
            "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
    };
    return (
        <>
            <section className="discountoffer commonSection">
                <div className="container">
                    <div className="mainContent flex justifyContentBetween">
                        <div className="content">
                            <SectionHeading options={sectionHeading} />
                            <a className='globalBtn' href="/">Sign Up Now</a>
                        </div>
                        <div className="image flex flexWrap justifyContentBetween">
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                            <figure className='client flex'>
                                <img src={client_1} alt="Client_1" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscountOffer