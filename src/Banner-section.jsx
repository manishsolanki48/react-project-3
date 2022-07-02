import React from "react";
import bannerimage1 from './images/banner-mobile-image1.png';
import bannerimage2 from './images/banner-mobile-image2.png';
import bannermobile3 from './images/banner-mobile3.png';
import bannermobileright1 from './images/banner-mobile1.png';
import bannermobileright2 from './images/banner-mobile2.png';
import bannerbackground from './images/banner-image.png';

function Bannersection(){
    return(
        <>
            <div className="banner-section">
                <div className="row container-fluid bannerwrapper">
                    <div className="banner-text-taital col-lg-6 col-md-12">
                        <h2 className="mb-4">Fill out the form and
                            start using our platform
                        </h2>
                        <form className="contect-form d-flex flex-column mb-3">
                            <input type="name" className="inner-input" placeholder="NAME"></input>
                            <input type="e-mail" className="inner-input" placeholder="E-MAIL"></input>
                            <input type="phone number" className="inner-input" placeholder="PHONE NUMBER"></input>
                            <input type="country" className="inner-input" placeholder="COUNTRY"></input>
                        </form>
                        <a href="#" className="banner-btn text-decoration-none tex-center d-flex justify-content-center text-light pt-2 pb-2 mb-3">Continue</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                           incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                           Risus commodo viverra maecenas accumsan lacus vel facilisis.  
                        </p>
                        <span>Doubts and comments call us at 464 5788</span>
                    </div>
                    <div className="banner-right col-lg-6 col-mb-12 d-flex flex-row">
                        <div className="banner-right-1-section d-flex align-items-end">
                            <img className="banner-image1" src={bannerimage1}/>
                            <img className="banner-mobile-right1" src={bannermobileright1}/>
                            <img className="banner-mobile-right2" src={bannermobileright2}/>
                        </div>
                        <div className="banner-right-2-section">
                            <img className="banner-image-2" src={bannerimage2}/>
                            <img className="banner-mobile-3" src={bannermobile3}/>
                        </div>
                        <img className="banner-background" src={bannerbackground}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bannersection;