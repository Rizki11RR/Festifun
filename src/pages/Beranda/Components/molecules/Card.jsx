import { deadpool } from "../../../../assets/main"
import ImageCard from "../atoms/ImageCard"
import Price from "../atoms/Price"

import TitleCard from "../atoms/TitleCard"

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <ImageCard imagecard={deadpool} />
        <div className="card-body">
          <TitleCard cardtitle='Cardddd' />
          <Price price='70.000' />
        </div>
      </div>
      <div className="card">
        <ImageCard imagecard={deadpool} />
        <div className="card-body">
          <TitleCard cardtitle='Cardddd' />
          <Price price='70.000' />
        </div>
      </div>
      <div className="card">
        <ImageCard imagecard={deadpool} />
        <div className="card-body">
          <TitleCard cardtitle='Cardddd' />
          <Price price='70.000' />
        </div>
      </div>
      <div className="card">
        <ImageCard imagecard={deadpool} />
        <div className="card-body">
          <TitleCard cardtitle='Cardddd' />
          <Price price='70.000' />
        </div>
      </div>
     
    </div>
  )
}

export default Card