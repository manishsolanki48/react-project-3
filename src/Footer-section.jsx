import React from "react";
import footerlogo from './images/footer-logo.png';

function Footersection(){
    return(
        <>
            <div className="footer-section d-flex justify-content-center mx-auto">
                <div className="footerwrapper footer-aboutUS-section d-flex flex-row">
                    <div className="footer-folder-1 footer-folder-section-1 text-light d-flex flex-column justify-content-center align-self-end">
                        <p>HOME</p>
                        <p>PRODUCTION</p>
                        <p>PLANS</p>
                        <p>PRICES</p>
                        <p>START</p>
                        <p>CONTACT</p>
                    </div>
                    <div className="footer-folder-2 text-light">
                        <h2 className="mb-3">Welcome to </h2>
                        <div className="footer-logo mb-3">
                            <img src={footerlogo}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore
                           magna aliqua. Quis ipsum suspendisse ultrices gravida. 
                           commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <span>Doubts and comments call us at 464 5788</span>
                    </div>
                    <div className="footer-contect-form text-light d-flex flex-column justify-content-center">
                        <p className="mb-3">Subscribe to our newsletter</p>
                        <input type="EMAIL" className="inner-input mb-4" placeholder="EMAIL"></input>
                        <a href="#" className="footer-btn text-decoration-none text-center d-flex justify-content-center">SIGN UP</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footersection;