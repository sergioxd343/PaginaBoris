function Products() {
  return (
    <div className="container py-5 mb-5">
  <div className="row g-5 justify-content-center">
    <div className="col-md-3">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/400x200"
          className="card-img-top rounded"
          alt="Palanganas"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Palanganas</h5>
          <p className="card-text text-muted">Basin</p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-primary w-100">
            Ver productos
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3 my-5">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/400x200"
          className="card-img-top rounded"
          alt="Cestos, botes y cubetas"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Cestos, botes y cubetas</h5>
          <p className="card-text text-muted">Baskets and buckets</p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-secondary w-100">
            Ver productos
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/400x200"
          className="card-img-top rounded"
          alt="Blancos"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Blancos</h5>
          <p className="card-text text-muted">Home whites</p>
        </div>
        <div className="card-footer text-center">
          <a href="#" className="btn btn-info w-100">
            Ver productos
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Products;
