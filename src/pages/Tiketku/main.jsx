// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Tiketku.scss";
import Cetak from "./Cetak";

function Tiketku() {
  return (
    <>
      <div className="container">
        <div className="text-title pt-5 mt-5 pt-md-3 mt-md-0">Tiketku</div>

        {/* Section Contet */}
        <Cetak />
        
      </div>
    </>
  );
}

export default Tiketku;
