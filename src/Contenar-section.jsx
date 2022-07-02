import React from "react";
import contenarleftimage from './images/banner-mobile-image1.png';
import contenarleftimage2 from './images/banner-mobile-image2.png';
import contenarleftimage3 from './images/contenar-image.png';

function Contenarsection(){
    return(
        <>
            <div className="contenar-section">
                <div className="row contenarwrapper">
                    <div className="contenar-left d-flex flex-column-reverse justify-content-center align-items-center col-lg-6">
                        <div className="contenar-left-image">
                            <img src={contenarleftimage}/>
                        </div>
                        <div className="contenar-left-image2">
                            <img src={contenarleftimage2}/>
                        </div>
                        <div className="conternar-leftimage3">
                            <img src={contenarleftimage3}/>
                        </div>
                    </div>
                    <div className="contenar-right col-lg-6">
                        <h2>Pay easy, fast
                            and secure
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                           ipsum suspendisse ultrices gravida. Risus commodo viverra
                           maecenas accumsan lacus vel facilisis
                        </p>
                        <a href="#" className="contenar-btn text-decoration-none text-center d-flex justify-content-center text-light">Start now</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contenarsection;