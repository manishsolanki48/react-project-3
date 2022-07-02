import React from "react";
import aboutUSimageplan from "./images/aboutUS-image.png";
import aboutusbackground from './images/banner-mobile1.png';

function AboutUSsection(){
    return(
        <>
            <div className="aboutUS-section pt-5">
                <div className="row container-fluid aboutUSwrapper">
                    <div className="aboutUS-text aboutUS-text-folder d-flex flex-row col-lg-10 col-sm-12 col-xs-12">
                        <div className="aboutUS-image">
                            <img src={aboutUSimageplan}/>
                        </div>
                        <div className="aboutUS-text-title col-xs-12">
                            <h2 className="mb-4 text-center mx-auto">What are the main forms
                                of online payment?
                            </h2>
                            <p className="mb-4 text-center mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                               incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
                               gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                            <div className="aboutUS-folder">
                                <a href="#" className="read-more text-decoration-none text-light mb-4 text-center mx-auto">Read more</a>
                                <span className="text-center mx-auto">Doubts and comments call us at 464 5788</span>
                            </div>
                        </div>
                    </div>
                    <div className="aboutUS-background col-lg-2 col-sm-12 col-xs-12 d-flex align-items-center">
                        <img src={aboutusbackground}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AboutUSsection;