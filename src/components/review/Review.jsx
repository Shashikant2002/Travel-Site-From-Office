import React from 'react';
import './review.css';
import SectionHeading from "../SectionHeading/SectionHeading";
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import review from '../../Assets/Image/review..jpg'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Review = () => {
    const sectionHeading = {
        topText: "PHOTO GALLERY",
        heading: "PHOTO'S FROM TRAVELLERS",
        description:
            "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
    };
    return (
        <>
            <div className="clientReview commonSection">
                <div className="container">
                    <SectionHeading options={sectionHeading} />

                    <Carousel responsive={responsive}
                        infinite={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        className="cards">
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="info flex alignItemCenter">
                                <img src={review} alt="Client" />
                                <div className="content">
                                    <p>GEORGE SMITH</p>
                                    <small>TRAVELLERS</small>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Review