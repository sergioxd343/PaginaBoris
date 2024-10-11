
function ProductCard({ product }) {
  return (
    <div className="col">
      <div className="cards h-100 text-center">
        <img src={product.img} className="card-img-top" alt={product.title} />
        <div className="card-bodys">
          <h5 className="card-title">{product.title}</h5>
          <p className="text-muted">Disponibilidad de colores</p>
          <div className="colors">
            <span className="badge bg-primary"></span>
            <span className="badge bg-info"></span>
            <span className="badge bg-danger"></span>
            <span className="badge bg-pink"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
