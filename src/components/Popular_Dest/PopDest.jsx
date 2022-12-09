import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./popDest.css";

const PopDest = () => {
    const sectionHeading = {
        topText: "UNCOVER PLACE",
        heading: "POPULAR DESTINATION",
        description: "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent."
    }
    return (
        <>
            <section className="popular_dest commonSection bor">
                <div className="container">
                    <SectionHeading options={sectionHeading} />
                </div>
            </section>
        </>
    )
}

export default PopDest