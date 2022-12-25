import React from 'react';
import SectionBanner from '../components/SectionBanner/SectionBanner';
import VideoContent from '../components/videoContent/VideoContent';
import bannerImg from '../Assets/Image/bannerBackground_1.jpg';
import OurIntro from '../components/OurIntro/OurIntro';

const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">
        <SectionBanner image={bannerImg} heading= {"ABOUT US"} />
        <OurIntro />
        <VideoContent />
      </div>
    </>
  )
}

export default AboutUs