import React from "react";
import galleryimage1 from './images/aboutUS-image.png';
import galleryimage2 from './images/service-image.png';
import gallerylogo from './images/logo.png';

function Gallerysection(){
    return(
        <>
            <div className="gallery-section">
                <div className="gallerywrapper d-flex justify-content-center mx-auto">
                    <div className="gallery-image1">
                        <img src={galleryimage1}/>
                    </div>
                    <div className="gallery-text d-flex flex-column align-items-center mx-3">
                        <h2 className="text-center mb-4">What is an</h2>
                        <div className="gallery-logo">
                            <img src={gallerylogo}/>
                        </div>
                        <p className="text-center mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                           ipsum suspendisse ultrices gravida. Risus commodo viverra
                           maecenas accumsan lacus vel facilisis.
                         </p>
                         <a href="#" className="gallery-btn text-decoration-none text-center d-flex justify-content-center text-light mb-4">Read more</a>
                         <span>Doubts and comments call us at 464 5788</span>
                    </div>
                    <div className="gallery-image1">
                        <img src={galleryimage2}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Gallerysection;