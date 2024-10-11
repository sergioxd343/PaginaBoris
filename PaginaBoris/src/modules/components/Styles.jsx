
import './Styles.css';
import ProductCard from './StyleCard';
import { useLocation } from 'react-router-dom';
import { cleaningProducts, otherProducts } from './StyleData';

function Products() {
  const location = useLocation(); // Obtén la URL actual

  // Selección de productos en función de la ruta
  let products = [];

  if (location.pathname === '/cleaning') {
    products = cleaningProducts;
  } else if (location.pathname === '/other') {
    products = otherProducts;
  } else {
    return <h2>No hay productos en esta ruta</h2>;
  }

  return (
    <div className="col-lg-12 img-background-white">
      <div className="container py-5 mb-5">
        <div className="row g-5 justify-content-center mb-5">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              title={product.title}
              description={product.description}
              buttonLabel={product.buttonLabel}
              buttonClass={product.buttonClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
