import Nav from "./components/Nav";
import Catalog from "./components/Catalog";
import Products from "../components/Styles";
import CatalogAll from "./components/CatalogAll";
import Footer from "../components/Footer";

function Cleaning() {
  return (
    <>
      <section>
        <Nav></Nav>
      </section>
      <section>
        <Catalog></Catalog>
      </section>
      <section>
        <Products></Products>
      </section>
      <section>
        <CatalogAll></CatalogAll>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}

export default Cleaning;
