import { useState } from "react";
import Slider from "react-slick";
import "./Nav.css";

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="col-lg-12">
        <Slider {...settings}>
          <div className="slide">
            <img
              className="d-block w-100"
              src="/home/BANNER 1.jpg" // Cambia esto por la ruta de tu imagen
              alt="First slide"
            />
            <div className="overlay-text">
              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "60px",
                }}
              >
                Top <br /> Design
              </h1>
              <p>Una experiencia única en la cocina y en la mesa</p>
            </div>
          </div>
          <div className="slide">
            <img
              className="d-block w-100"
              src="/home/BANNER 3.jpg" // Cambia esto por la ruta de tu imagen
              alt="Second slide"
            />
            <div className="overlay-text">
              <h1
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "60px",
                }}
              >
                Diseño Innovador
              </h1>
              <p>Descubre nuevos sabores y experiencias.</p>
            </div>
          </div>
        </Slider>

        <div
          className="container"
          style={{ position: "absolute", top: "0", left: "5%", zIndex: 10 }}
        >
          <div className="row p-5 col-lg-12 justify-content-between align-items-center">
            <div className="col d-flex justify-content-start">
              <img
                src="../../../../BORIS_BLANCO.png"
                alt="logo"
                style={{ width: "150px" }}
              />
            </div>
            <div className="col d-flex justify-content-end">
              <button
                onClick={toggleModal}
                style={{ background: "none", border: "none" }}
              >
                <img
                  src="../../../Menu.png"
                  alt="menu"
                  style={{ width: "30px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ✖
            </button>
            <input
              type="text"
              placeholder="Qué tal, ¿Qué estás buscando?"
              className="search-input"
            />
            <h2>
              <a href="">Home</a>
            </h2>
            <h3>Colecciones</h3>
            <h3>Empresa</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
