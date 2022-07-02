import React from 'react';
import './App.css';
import Menu from './Top.header-section';
import Bannersection from './Banner-section';
import AboutUSsection from './AboutUS-section';
import Servicesection from './Service-section';
import Contenarsection from './Contenar-section';
import Blogsection from './Blog-section';
import Promosection from './Promo-section';
import Productionsection from './Production-section';
import Gallerysection from './Gallery-section';
import Footersection from './Footer-section';


function App() {
  return (
    <>
        <Menu></Menu>
        <Bannersection></Bannersection>
        <AboutUSsection></AboutUSsection>
        <Servicesection></Servicesection>
        <Contenarsection></Contenarsection>
        <Blogsection></Blogsection>
        <Promosection></Promosection>
        <Productionsection></Productionsection>
        <Gallerysection></Gallerysection>
        <Footersection></Footersection>
    </>
  );
}

export default App;
