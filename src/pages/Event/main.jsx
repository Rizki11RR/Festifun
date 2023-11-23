// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { amikom } from '../../assets/main';
import CarouselComponent from '../../components/molecules/Carousel';
import CardComponent from '../../components/molecules/card';
import ButtonCategory from './components/atoms/ButtonCategory';
import ListCategoryEvent from './components/molecules/ListCategoryEvent';


function Event() {
  return (
    
    <div className='container'>
      <CarouselComponent />
      <div className="input-pencarian">
        <input type="text" className="form-control" placeholder="Cari event kamu disini!" aria-label="Cari event kamu disini!" aria-describedby="button-addon2" />
        <button type="button" className="btn btn-primary">Cari</button>
      </div>

      <ListCategoryEvent />

      {/* judul Konser Musik */}
      <div className=''>
        <h2 className='hsl-src'>Konser Musik</h2>
        <hr />
      </div>


      {/* pembungkus konten */}
      <div className='bungkus'>
        {/* control filter */}
        <div className='container-filter'>
          <div className='filter1'>
            <h5 className=''>Semua Waktu</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Weekdays</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">Weekend</label>
            </div>
          </div>
          <div className='filter2'>
            <h5 className=''>Harga</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">0 - 100 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">100 - 250 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">250 - 500 rb</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">500 rb - 2 jt</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">2 jt - 5 jt</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">+ 5 jt</label>
            </div>
          </div>
        </div>


        {/* div card */}
        <div className="row">
          {/* card baris satu */}

          <div className="card-container">
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
          </div>
          <br />
          <br />
          <div className="card-container">
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
          </div>
          <br />
          <div className="card-container">
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
            <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Event