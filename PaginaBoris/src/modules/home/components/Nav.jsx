import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
                Diseño <br /> Innovador
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
                className="logo-boris"
                style={{ width: "150px" }} /* Tamaño por defecto */
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
                  className="menu-icon"
                  style={{ width: "30px" }} /* Tamaño por defecto */
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
            <button className="close-modal ms-auto" onClick={toggleModal}>
              x
            </button>
            <input
              type="text"
              placeholder="Qué tal, ¿Qué estás buscando?"
              className="search-input d-block mb-3"
            />
            <div className="col-lg-6 d-flex flex-column align-items-end">
              <br />
              <Link to="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Home
                </span>
              </Link>
              <br />
              <Link to="/cleaning" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Limpieza
                </span>
              </Link>
              <br />
              <Link to="/empresa" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Empresa
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
