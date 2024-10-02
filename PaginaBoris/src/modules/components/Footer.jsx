import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="col-lg-12 d-flex justify-content-center background-foother">
        <div className="col-lg-7">
          <div className="row justify-content-center">
            <div className="col d-flex flex-column align-items-center">
              <div className="col-lg-12 mt-5">
                <img
                  src="../../BORIS_BLANCO.png"
                  alt="logo"
                  style={{ width: "170px" }}
                />
              </div>
              <div className="col-lg-12 mt-4">
                <button
                  className="btn btn-light rounded-pill"
                  style={{ padding: "0px 30px" }}
                >
                  Descarga nuestro catálogo digital
                </button>
              </div>

              <div className="col-lg-12 mt-5">
                <img
                  src="../../LOGOS PNG.png"
                  alt="IBoris"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-end align-items-end m-1 mt-5">
              <div className="text-end pt-5" style={{ color: "white" }}>
                <strong>Enlases Externos</strong>
              </div>
              <div className="col-lg-5 text-end lh-sm">
                <a href="#" className="d-block text-decoration-none text-end">
                  <span style={{ color: "white" }}>- Nuestra Historia</span>
                </a>
                <a href="#" className="d-block text-decoration-none text-end">
                  <span style={{ color: "white" }}>- Bolsa de trabajo</span>
                </a>
                <a href="#" className="d-block text-decoration-none text-end">
                  <span style={{ color: "white" }}>- Contacto</span>
                </a>
              </div>

              <div className="mt-3 text-end" style={{ color: "white" }}>
                <strong> Contáctanos </strong>
              </div>
              <div className="col-lg-10 text-end mb-5 lh-sm fs-6">
                <p>
                  <span style={{ color: "white" }}>
                    Simao de Veiga #101 Col. Plaza de toros
                    <br />
                    C.P. / Zip Code 37450, León Guanajuato México
                    <br />
                    Tel: (477) 123 4567 / (477) 765 4321
                    <br />
                    email: ventasboris@ibois.com.mx
                    <br />
                    borisventas@iboris.com.mx
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 row justify-content-center p-3" style={{ backgroundColor: '#3c3c3c', color: 'white' }}>
          &copy; Industrias Boris S.A. DE S.V 2024 - Politicas de Privacidad - Aviso Legal - Politicas de Cookies
      </div>
    </footer>
  );
};

export default Footer;
