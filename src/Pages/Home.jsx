import React from 'react'
import Banner from '../components/Banner/Banner'
import DiscountOffer from '../components/discountOffer/DiscountOffer'
import LatestBlog from '../components/latestBlog/LatestBlog'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery'
import PopularPackages from '../components/popularPackages/PopularPackages'
import PopDest from '../components/Popular_Dest/PopDest'
import Review from '../components/review/Review'
import SpecialPackages from '../components/specialPackages/SpecialPackages'
import VideoContent from '../components/videoContent/VideoContent'

const Home = () => {
  return (
    <>
      <Banner />
      <PopDest />
      <PopularPackages />
      <VideoContent />
      {/* <SpecialPackages /> */}
      {/* <PhotoGallery /> */}
      {/* <DiscountOffer /> */}
      {/* <LatestBlog /> */}
      {/* <Review /> */}
    </>
  )
}

export default Home