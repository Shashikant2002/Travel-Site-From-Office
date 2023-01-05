import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./popularPackages.css";
import Package from "../packag/Package";

const PopularPackages = () => {
  const sectionHeading = {
    topText: "POPULAR PACKAGES",
    heading: "CHECKOUT OUR PACKAGES",
    description:
      "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
  };
  return (
    <>
      <div className="commonSection popular_package">
        <div className="container">
          <SectionHeading options={sectionHeading} />

          <div className="content">
            <div className="cards">
              <Package />
              <Package />
              <Package />
              
            </div>
          </div>
          <a className="globalBtn" href="/">VIEW ALL PACKAGES</a>
        </div>
      </div>
    </>
  );
};

export default PopularPackages;
