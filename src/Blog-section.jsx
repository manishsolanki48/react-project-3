import React from "react";
import bloglogo from './images/logo.png';
import blogimage1 from './images/blogimage1.png';
import blogrightimage from './images/blog-section-image.png';
import blogbackground from './images/blog-section-background.png';

function Blogsection(){
    return(
        <div className="blog-section">
            <div className="row container-fluid blogwrapper">
                <div className="blog-section-left d-flex flex-column col-lg-6 col-md-6">
                    <div className="blog-section-text d-flex flex-column align-self-center">
                        <div className="blog-logo mb-5">
                            <img src={bloglogo}/>
                        </div>
                        <span className="mb-2">The best digital
                            payment option for
                            your business
                        </span>
                        <p className="mb-5">Doubts and comments call us at 464 5788</p>
                        <a href="#" className="blog-btn text-decoration-none text-center d-flex justify-content-center text-light mb-5">Start-now</a>
                    </div>
                    <div className="blog-image1">
                        <img src={blogimage1}/>
                    </div>
                </div>
                <div className="blog-section-right col-lg-6 col-md-6">
                    <div className="blog-right-image">
                        <img src={blogrightimage}/>
                    </div>
                    <div className="blog-background">
                        <img src={blogbackground}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Blogsection;