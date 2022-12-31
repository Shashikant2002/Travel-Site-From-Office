import React from 'react';
import Socal from '../../components/Socal/Socal';
import "./touch.css";

const GetInTouch = () => {
    return (
        <>
            <div className="getInTouch commonSection">
                <div className="container flex">
                    <div className="content">
                        <div className="cardContent">
                            <h4>GET IN TOUCH</h4>
                            <h3>REACH & CONTACT US!</h3>
                            <p>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent. Eget feugiat error necessitatibus taciti.</p>
                            <Socal />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112057.38696005884!2d77.22434559999999!3d28.635955199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1672482606962!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="content alignItemCenter flex">
                        <form action="/">
                            <label className='colorWhite' htmlFor="name">Your Name.</label>
                            <input id='name' name='name' type="text" />

                            <label className='colorWhite' htmlFor="email">Your E-Mail.</label>
                            <input id='email' name='name' type="text" />

                            <label className='colorWhite' htmlFor="message">Comments / Questions</label>
                            <textarea id='message' name='name' type="text" />
                            
                            <button className='globalBtn' >SUBMIT MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch