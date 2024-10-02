function Cleaning() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-1"></div>
        <div className="col-lg-4 align-self-center align-items-center m-3">
          <p><span style={{ fontWeight: '600', fontSize: '24px'}}>Perfectos para tu organización</span></p>
          <p>
            <span style={{ fontSize: '14px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              reprehenderit impedit rem, magnam delectus officia, obcaecati
            </span>
          </p>
          <br />
          <div>
            <button className="btn btn-primary rounded-pill m-3 ms-auto d-block px-5">
              Conocenos
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <img src="/home/IMAGEN 2.png" alt="img2" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Cleaning;
