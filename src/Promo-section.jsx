import React from "react";
import promorightimage from './images/promo-image.png';
import promorightimage2 from './images/promo-image2.png';
import promobackground from './images/promo-background.png';

function Promosection(){
    return(
        <>
            <div className="promo-section">
                <div className="row container-fluid promowrapper">
                    <div className="promo-left d-flex flex-column justify-content-center align-items-center col-lg-6 col-md-6">
                        <div className="promo-background">
                            <img src={promobackground}/>
                        </div>
                        <span className="mb-3">Do not worry!
                              24/7 technical support
                        </span>
                        <p>Doubts and comments call us at 464 5788</p>
                    </div>
                    <div className="promo-right col-lg-6 col-md-6">
                        <div className="promo-right-image">
                            <img src={promorightimage}/>
                        </div>
                        <div className="promo-right-image2">
                            <img src={promorightimage2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Promosection;