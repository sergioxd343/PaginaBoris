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
                  style={{ width: "150px" }}
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
            </div>
            <div className="col d-flex justify-content-end">a</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
