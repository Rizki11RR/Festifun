// eslint-disable-next-line no-unused-vars
import React from 'react'
import Carousel from './Components/Carousel';
import SearchingComponent from './Components/search';
import RekomendasiList from './Components/RekomendasiList';
import BannerHome from './Components/molecules/BannerHome';
import FAQ from './Components/molecules/FAQ';
function Beranda() {
  return (
    <div>
      <Carousel />
      <SearchingComponent />
      <RekomendasiList />
      <BannerHome />
      <FAQ />
    </div>
  )
}

export default Beranda