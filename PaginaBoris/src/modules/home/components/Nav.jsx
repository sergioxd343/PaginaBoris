import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <>
            <div className='col-lg-12'>
                <div className="background-image">
                    <div className='container'>
                        <div className='row p-5 col-lg-12 justify-content-between align-items-center'>
                            <div className='col d-flex justify-content-star'>
                                <img src="../../../../public/BORIS_BLANCO.png" alt="logo" style={{ width: '150px' }} />
                            </div>
                            <div className='col d-flex justify-content-end'>
                                <a href="">
                                    <img src="../../../../public/Menu.png" alt="menu" style={{ width: '30px' }} />
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className="overlay-text">
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '60px' }}>Top <br /> Design
                            {/* &reg; */}
                        </h1>
                        <p>Una experiencia única en la cocina y en la mesa</p>
                    </div>
                </div>
            </div>
            <div className="container">

            </div>
        </>
    );
}

export default Nav;