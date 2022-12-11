import React from 'react'
import Banner from '../components/Banner/Banner'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery'
import PopularPackages from '../components/popularPackages/PopularPackages'
import PopDest from '../components/Popular_Dest/PopDest'
import SpecialPackages from '../components/specialPackages/SpecialPackages'
import VideoContent from '../components/videoContent/VideoContent'

const Home = () => {
  return (
    <>
      <Banner />
      <PopDest />
      <PopularPackages />
      <VideoContent />
      <SpecialPackages />
      <PhotoGallery />
    </>
  )
}

export default Home