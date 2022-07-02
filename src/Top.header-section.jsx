import React, { useState } from "react";
import Modal from 'react-modal';
import topheaderlogo from './images/logo.png';

function Menu(){
    const [modal, setModal] =useState(false);
     
    const toggleModal =() => {setModal(!modal)}
    return(
        <>
        <a href="#" onClick={toggleModal} className="show-btn"><i class="fa-solid fa-bars"></i></a>
        {modal &&(
            <div className="top-header d-flex flex-row justify-content-center mx-auto">
                <div className="logo">
                    <img src={topheaderlogo}/>
                </div>
                <ul onClick={toggleModal} className="menu d-flex justify-content-center align-items-center">
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">HOME</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PRODUCTS</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PLANS</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PRICES</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">START</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">CONTECT</a></li>
                </ul>
                <div className="top-header-icon d-flex align-items-center">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <a href="#" className="login-btn d-flex align-items-center text-decoration-none">LOGIN</a>
            </div>
        )}
            <div className="top-header-section d-flex flex-row justify-content-center mx-auto">
                <div className="top-header-logo">
                    <img src={topheaderlogo}/>
                </div>
                <ul  className="nev-menu d-flex justify-content-center align-items-center">
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">HOME</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PRODUCTS</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PLANS</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">PRICES</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">START</a></li>
                    <li className="list-group list-group-flush"><a href="#" className="text-decoration-none">CONTECT</a></li>
                </ul>
                <div className="top-header-icon-menu d-flex align-items-center">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
                <a href="#" className="login-btn-menu d-flex align-items-center text-decoration-none">LOGIN</a>
            </div>
        </>
    )
};

export default Menu;