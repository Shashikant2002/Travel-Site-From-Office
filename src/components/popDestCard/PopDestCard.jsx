import React from 'react'
import "./popdest.css";
import { AiFillStar } from 'react-icons/ai';

const PopDestCard = ({background}) => {
    return (
        <a className='popDestCard' href="/">
            <div className="card" style={{ background: `url(${background})` }}>
                <div className="content">
                    <div className="star colorWhite flex"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <p className='colorBlue'>ITALY</p>
                    <h4>SAN MIGUEL</h4>
                    <p>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                </div>
            </div>
        </a>
    )
}

export default PopDestCard