import "./calltoaction.css";
import React from 'react'
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const CallToAction = () => {

    const sectionHeading = {
        topText: "CALL TO ACTION",
        heading: "READY FOR UNFORGATABLE TRAVEL. REMEMBER US!",
        description:
            "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
    };

    return (
        <>
            <div className="callToAction commonSection textAlignCenter">
                <div className="container">
                    <SectionHeading options={sectionHeading} />
                    <Link className="globalBtn" to="/contact" >CONTACT US !</Link>
                </div>
            </div>
        </>
    )
}

export default CallToAction