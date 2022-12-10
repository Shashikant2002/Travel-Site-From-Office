import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./popDest.css";
import { AiFillStar } from 'react-icons/ai';
import destImg from '../../Assets/Image/popular_Dest.jpg'

const PopDest = () => {
    const sectionHeading = {
        topText: "UNCOVER PLACE",
        heading: "POPULAR DESTINATION",
        description: "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
    }
    return (
        <>
            <section className="popular_dest commonSection">
                <div className="container textAlignCenter">
                    <SectionHeading options={sectionHeading} />
                    <div className="cards flex justifyContentBetween flexWrap">
                        <a href="/">
                            <div className="card" style={{ background: `url(${destImg})` }}>
                                <div className="content">
                                    <div className="star colorWhite flex"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                    <p className='colorBlue'>ITALY</p>
                                    <h4>SAN MIGUEL</h4>
                                    <p>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="card" style={{ background: `url(${destImg})` }}>
                                <div className="content">
                                    <div className="star colorWhite flex"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                    <p className='colorBlue'>ITALY</p>
                                    <h4>SAN MIGUEL</h4>
                                    <p>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                                </div>
                            </div>
                        </a>
                        <a href="/">
                            <div className="card" style={{ background: `url(${destImg})` }}>
                                <div className="content">
                                    <div className="star colorWhite flex"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                                    <p className='colorBlue'>ITALY</p>
                                    <h4>SAN MIGUEL</h4>
                                    <p>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a className='globalBtn' href="/">MORE DESTINATION</a>
                </div>
            </section>
        </>
    )
}

export default PopDest