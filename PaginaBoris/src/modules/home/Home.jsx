import Nav from "./components/Nav";
import Present from "./components/Present";
import PBAFree from "./components/PBAFree";
import Footer from "../components/Footer";
import Tableware from "./components/Tableware";
import Cleaning from "./components/Cleaning";

function Home() {
  return (
    <>
      <section>
        <Nav />
      </section>
      <section>
        <Present />
      </section>
      <section>
        <PBAFree />
      </section>
      <section>
        <Tableware />
      </section>
      <section>
        <Cleaning />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
