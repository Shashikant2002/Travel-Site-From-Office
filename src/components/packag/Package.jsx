import React from 'react';
import "./pack.css";
import pack from "../../Assets/Image/packages.jpg";
import { MdWatchLater } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

const Package = () => {
    return (
        <>
            <div className="package">
                <div className="card flex justifyContentBetween">
                    <figure className="image">
                        <img src={pack} alt="Packageimage" />
                    </figure>
                    <div className="cardContent">
                        <h4>EXPERIENCE THE GREAT HOLIDAY ON BEACH</h4>
                        <p>
                            Laoreet, voluptatum nihil dolor esse quaerat mattis
                            explicabo maiores, est aliquet porttitor! Eaque, cras,
                            aspernatur.
                        </p>
                        <div className="detail">
                            <p className="flex alignItemCenter">
                                <MdWatchLater /> 7D/6N
                            </p>
                            <p className="flex alignItemCenter">
                                <BsFillPeopleFill /> pax: 10
                            </p>
                            <p className="flex alignItemCenter">
                                <ImLocation /> Malaysia
                            </p>
                        </div>
                    </div>
                    <div className="star flex flexDirCol justifyContentCenter alignItemCenter">
                        <p className="flex alignItemCenter colorWhite">
                            (25 reviews){" "}
                            <span className="flex">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </span>
                        </p>
                        <h3 className="colorWhite">$750</h3>
                        <p className="colorWhite">/ per person</p>
                        <a className="globalBorderBtn" href="/">
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Package