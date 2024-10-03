import "./Products.css";

function Products() {
  return (
    <div className="col-lg-12 img-background-white">
      <div className="container py-5 mb-5">
        <div className="row g-5 justify-content-center mb-5">

          <div className="col-md-3 mb-5">

            <div className="card shadow-sm">
              <img
                src="cleaning/PRODUCTO_LIMPIEZA1.png"
                className="card-img-top"
                alt="Palanganas"
              />
              <div className="card-body">
                <h5 className="card-title">Palanganas</h5>
                <p className="card-text text-muted">Basin</p>
                <a href="#" className="btn btn-primary btn-custom">
                  Ver productos
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                src="/cleaning/PRODUCTO_LIMPIEZA2.png"
                className="card-img-top"
                alt="Cestos, botes y cubetas"
              />
              <div className="card-body">
                <h5 className="card-title">Cestos, botes y cubetas</h5>
                <p className="card-text text-muted">Baskets and buckets</p>
                <a href="#" className="btn btn-secondary btn-custom">
                  Ver productos
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm">
              <img
                src="cleaning/PRODUCTO_LIMPIEZA3.png"
                className="card-img-top rounded"
                alt="Blancos"
              />
              <div className="card-body">
                <h5 className="card-title">Blancos</h5>
                <p className="card-text text-muted">Home whites</p>
                <a href="#" className="btn btn-info btn-custom">
                  Ver productos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
