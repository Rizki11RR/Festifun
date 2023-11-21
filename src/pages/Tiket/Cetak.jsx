// eslint-disable-next-line no-unused-vars
import React from "react";

function CetakTiket() {
  return (
    <>
      <div className="mb-5">
        <div className="border-top border-2 mt-2 mb-4"></div>
        <h5 className="text-dark-blue fw-semibold pt-3">
          Happy Asmara Music - BIMA KARUNIA FAJAR SYAHPUTRA
        </h5>
        <div className="row">
          {/* Kiri */}
          <div className="col-12 col-md-7 py-2">
            <div className="card card-light-shadow">
              <img
                src="./tiketku.png"
                alt="tiket"
                className="bg-dark-blue rounded"
              />
              <div className="card-body ps-5">
                <div className="card-title">
                  <h6 className="fw-semibold text-dark-blue fs-4 py-3">
                    Deskripsi
                  </h6>
                </div>
                <div className="card-text text-card-deskripsi">
                  {/* With */}
                  <div>
                    <h6>live music performance with:</h6>
                    <ul>
                      <li>Muak</li>
                      <li>Bertaut</li>
                    </ul>
                  </div>
                  {/* Daftar penyayi */}
                  <div>
                    <h6>Daftar penyanyi:</h6>
                    <ul>
                      <li>Muak</li>
                      <li>Bertaut</li>
                    </ul>
                  </div>
                  {/* Syarat */}
                  <div>
                    <h6>Syarat Ketentuan:</h6>
                    <ul>
                      <li>Dilarang Membawa makanan dari luar</li>
                      <li>Dilarang membawa minum dari luar</li>
                      <li>Dilarang membawa benda tajam</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Kanan */}
          <div className="col-12 col-md-5 py-2">
            <div className="card card-shadow px-5 py-4 rounded-4">
              <div className="card-title fw-semibold mb-4">
                Happy Asmara MUSIK
              </div>
              <div className="card-text">
                <h5 className="text-card-unduh ">
                  <span>
                    <img src="./icons/date.png" alt="" className="pb-1 pe-2" />
                  </span>
                  24 Des - 25 Des 2024
                </h5>

                <h5 className="text-card-unduh ">
                  <span>
                    <img src="./icons/clock.png" alt="" className="pb-1 pe-2" />
                  </span>
                  15:00 - 22:00 WIB
                </h5>

                <h5 className="text-card-unduh ">
                  <span>
                    <img src="./icons/map.png" alt="" className="pb-1 pe-2" />
                  </span>
                  Kota Yogyakarta, Daerah Istimew..
                </h5>
              </div>
              <div className="border-top border-dashed my-3 "></div>
              <div className="row">
                <div className="col-2 col-lg-1 justify-center align-self-center">
                  <img src="./avatar-putra.png" alt="" />
                </div>
                <div className="col-10 col-lg-11 ps-4">
                  <h6 className="text-pasif">diselengarakan oleh :</h6>
                  <h6>Putra Sri Sultan HB X</h6>
                </div>
              </div>
              <a
                href="#"
                className="btn btn-primary bg-dark-blue align-self-center w-75 mt-4 rounded-3"
              >
                Unduh Tiket
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CetakTiket;
