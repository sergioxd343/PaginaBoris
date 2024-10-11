// CleaningProducts.js
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from '../../components/Footer';
import ProductList from '../../components/ProductList';

const products = [
  { id: 1, title: "Tabla de picar practy mediana", img: "img1.jpg" },
  { id: 2, title: "Tabla de picar practy grande", img: "img2.jpg" },
  { id: 3, title: "Tabla de picar practy pequeña", img: "img3.jpg" },
  { id: 4, title: "Tabla de picar practy extra grande", img: "img4.jpg" },
  { id: 5, title: "Tabla de picar practy mediana", img: "img5.jpg" },
  { id: 6, title: "Tabla de picar practy grande", img: "img6.jpg" },
  { id: 7, title: "Tabla de picar practy pequeña", img: "img7.jpg" },
  { id: 8, title: "Tabla de picar practy extra grande", img: "img8.jpg" },
  { id: 9, title: "Tabla de picar practy mediana", img: "img9.jpg" },
];

function CleaningProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section>
        <Nav />
      </section>

      <ProductList 
        currentProducts={currentProducts}
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <section>
        <Footer />
      </section>
    </>
  );
}

export default CleaningProducts;
