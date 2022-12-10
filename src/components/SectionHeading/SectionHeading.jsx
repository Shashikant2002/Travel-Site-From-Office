import React from 'react';
import "./sectionHeading.css";

const SectionHeading = (props) => {
    const {topText, heading, description} = props.options;
  return (
    <>
        <div className="sectionHeading bors textAlignCenter">
            <p>{topText}</p>
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    </>
  )
}

export default SectionHeading