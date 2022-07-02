import React from "react";
import servicebackground from './images/service-background.png';
import serviceimage1 from './images/banner-mobile2.png';
import servicerightimage from './images/service-image.png';
import servicerightimage2 from './images/service-background2.png';

function Servicesection(){
    return(
        <>
            <div className="service-section">
                <div className="container-fluid servicewrapper">
                    <div className="service-left">
                        <div className="service-background">
                            <img src={servicebackground}/>
                        </div>
                        <div className="service-text">
                            <span className="mb-4">Download the App,
                                  link your cards and 
                                  pay wherever you want
                            </span>
                            <a href="#" className="service-btn mb-4">Download</a>
                            <p>Doubts and comments call us at 464 5788</p>
                            <div className="service-image1">
                                <img src={serviceimage1}/>
                            </div>
                        </div>
                    </div>
                    <div className="service-right">
                        <div className="service-right-image">
                            <img src={servicerightimage}/>
                        </div>
                        <div className="service-right-image2">
                            <img src={servicerightimage2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Servicesection;