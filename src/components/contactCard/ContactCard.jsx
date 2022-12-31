import "./contactcard.css";
import React from 'react';
import { GoLocation } from 'react-icons/go';

const ContactCard = () => {
  return (
    <>
      <div className="contactCard commonSection">
        <div className="container flex justifyContentCenter flexWrap">
          <div className="card flex alignItemCenter flexDirCol textAlignCenter">
            <div className="icon">
              <GoLocation />
            </div>
            <h4>ADDRESS LOCATION</h4>
            <p>3146 Koontz, California <br />
              Quze.24 Second floor <br />
              36 Street, Melbourne</p>
          </div>
          <div className="card flex alignItemCenter flexDirCol textAlignCenter">
            <div className="icon">
              <GoLocation />
            </div>
            <h4>ADDRESS LOCATION</h4>
            <p>3146 Koontz, California <br />
              Quze.24 Second floor <br />
              36 Street, Melbourne</p>
          </div>
          <div className="card flex alignItemCenter flexDirCol textAlignCenter">
            <div className="icon">
              <GoLocation />
            </div>
            <h4>ADDRESS LOCATION</h4>
            <p>3146 Koontz, California <br />
              Quze.24 Second floor <br />
              36 Street, Melbourne</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard