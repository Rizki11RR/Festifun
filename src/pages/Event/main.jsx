// Event.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import Lay from './Lay';
// import DeskripsiEvent from './deskripsiEvent';

function Event() {
  return (
    <div>
    <Carousel />
    <br />
    <SearchBar />
    <br />
    {/* <DeskripsiEvent /> */}
    <Lay />
  </div>
  )
}


export default Event;

