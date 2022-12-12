import React from 'react';
import './latest.css';
import SectionHeading from "../SectionHeading/SectionHeading";
import blog from "../../Assets/Image/blog.jpg";
import { BsFillChatFill } from 'react-icons/bs';

const LatestBlog = () => {
    const sectionHeading = {
        topText: "LATEST BLOG",
        heading: "OUR RECENT POSTS",
        description:
            "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
    };
    return (
        <>
            <section className="latestBlog commonSection">
                <div className="container">
                    <div className="blogHeading flex alignItemCenter justifyContentBetween">
                        <SectionHeading options={sectionHeading} />
                        <div className="viewAll">
                            <a className='globalBtn' href="/">VIEW ALL BLOG</a>
                        </div>
                    </div>

                    <div className="cards flex">
                        <div className="card flex">
                            <figure className='flex'>
                                <img src={blog} alt="Latest_blog" />
                            </figure>
                            <div className="card_content">
                                <p>TOUR</p>
                                <h4>BEST JOURNEY TO PEACEFUL PLACES</h4>
                                <p>Laboris hac erat dolor, posuere volutpat fringilla gravida metus nonummy, blandit mi...</p>
                                <div className="buttons flex justifyContentBetween textAlignCenter">
                                    <a className='globalBtn' href="/">READ MORE</a>
                                    <a href='/' className='chat flex justifyContentBetween alignItemCenter'><BsFillChatFill /> 00</a>
                                </div>
                            </div>
                        </div>
                        <div className="card flex">
                            <figure className='flex'>
                                <img src={blog} alt="Latest_blog" />
                            </figure>
                            <div className="card_content">
                                <p>TOUR</p>
                                <h4>BEST JOURNEY TO PEACEFUL PLACES</h4>
                                <p>Laboris hac erat dolor, posuere volutpat fringilla gravida metus nonummy, blandit mi...</p>
                                <div className="buttons flex justifyContentBetween textAlignCenter">
                                    <a className='globalBtn' href="/">READ MORE</a>
                                    <a href='/' className='chat flex justifyContentBetween alignItemCenter'><BsFillChatFill /> 00</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestBlog