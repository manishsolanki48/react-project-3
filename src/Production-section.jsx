import React from "react";
import productionimage1 from './images/production-section-image.png';
import produionimage2 from './images/production-section-image2.png';
import productionimage3 from './images/production-section-image3.png';

function Productionsection(){
    return(
        <>
            <div className="production-section">
                <div className="row container-fluid produtcionwrapper">
                    <div className="producrion-image d-flex justify-content-center col-lg-6">
                        <img src={productionimage1}/>
                    </div>
                    <div className="production-text d-flex flex-column justify-content-center col-lg-4">
                        <h2 className="mb-5">Pay with ew.pay!</h2>
                        <span className="mb-3">Completely secure and
                              high-tech encryption
                        </span>
                        <p className="mb-5">Doubts and comments call us at 464 5788</p>
                        <div className="production-text-image">
                            <img src={produionimage2}/>
                        </div>
                    </div>
                    <div className="prodution-image-folder col-lg-2">
                        <img src={productionimage3}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Productionsection;