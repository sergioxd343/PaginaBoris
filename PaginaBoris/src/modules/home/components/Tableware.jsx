import "./Tableware.css";

function Tableware() {
  return (
    <div className="col-lg-12">
      <div className="row justify-content-center background-tableware">
        <div className="col-lg-6 col-sm-8 align-self-center align-items-end ms-auto d-block">
          <div className="col-lg-8">
            <p>
              <span style={{ fontFamily: 'Adeila, sans-serif', color: 'white', fontSize: '24px' }}>Complemento listo para la mesa</span>
            </p>
            <p>
              <span style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo unde rem corrupti quis itaque modi, magni aspernatur quos sed vel culpa eius earum enim quo? Totam, repellendus necessitatibus? Delectus.</span>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Tableware;
