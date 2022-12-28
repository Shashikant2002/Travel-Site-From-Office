import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./popDest.css";
import destImg from '../../Assets/Image/popular_Dest.jpg'
import PopDestCard from '../popDestCard/PopDestCard';

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
                    <div className="cards flex justifyContentCenter">
                        <PopDestCard background = {destImg}  />
                        <PopDestCard background = {destImg}  />
                        <PopDestCard background = {destImg}  />
                    </div>
                    <a className='globalBtn' href="/">MORE DESTINATION</a>
                </div>
            </section>
        </>
    )
}

export default PopDest