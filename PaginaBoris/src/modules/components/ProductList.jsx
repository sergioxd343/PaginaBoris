// ProductList.js
import ProductCard from './ProductCard.jsx';

function ProductList({ currentProducts, paginate, currentPage, totalPages }) {
  return (
    <section>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </a>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li className="page-item" key={index}>
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
