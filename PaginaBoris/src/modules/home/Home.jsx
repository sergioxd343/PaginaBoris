import React from "react";
import Nav from "./components/Nav";
import Present from "./components/Present";
import PBAFree from "./components/PBAFree";
import Footer from "../components/Footer";

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
                <Footer />
            </section>
            
        </>

    );
}

export default Home;