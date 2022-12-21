import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./special.css";
import { MdWatchLater } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import packageImg from "../../Assets/Image/specialoffer.jpg";

const SpecialPackages = () => {
  const sectionHeading = {
    topText: "OFFER & DISCOUNT",
    heading: "OUR SPECIAL PACKAGES",
    description:
      "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
  };
  return (
    <>
      <div className="commonSection specialPackages">
        <div className="container textAlignCenter">
          <SectionHeading options={sectionHeading} />
          <div className="content flexWrap flex justifyContentCenter">
            <div className="card" style={{ background: `url(${packageImg})` }}>
              <div className="textContent">
                <div className="detail flex">
                  <p className="flex alignItemCenter">
                    <MdWatchLater /> 7D/6N
                  </p>
                  <p>|</p>
                  <p className="flex alignItemCenter">
                    <BsFillPeopleFill /> pax: 10
                  </p>
                  <p>|</p>
                  <p className="flex alignItemCenter">
                    <ImLocation /> Malaysia
                  </p>
                </div>
                <h4>TOUR TO SATORINI</h4>
                <p>
                  Fusce hic augue velit wisi ips quibus dam pariatur, iusto.
                </p>
                <h4 className="colorDark">price: $1300 $1105</h4>
                <a className="globalBtn" href="/">
                  BOOK NOW
                </a>
              </div>
            </div>
            <div className="card" style={{ background: `url(${packageImg})` }}>
              <div className="textContent">
                <div className="detail flex">
                  <p className="flex alignItemCenter">
                    <MdWatchLater /> 7D/6N
                  </p>
                  <p>|</p>
                  <p className="flex alignItemCenter">
                    <BsFillPeopleFill /> pax: 10
                  </p>
                  <p>|</p>
                  <p className="flex alignItemCenter">
                    <ImLocation /> Malaysia
                  </p>
                </div>
                <h4>TOUR TO SATORINI</h4>
                <p>
                  Fusce hic augue velit wisi ips quibus dam pariatur, iusto.
                </p>
                <h4 className="colorDark">price: $1300 $1105</h4>
                <a className="globalBtn" href="/">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
          <a className="globalBtn" href="/">
            VIEW ALL PACKAGES
          </a>
        </div>
      </div>
    </>
  );
};

export default SpecialPackages;
