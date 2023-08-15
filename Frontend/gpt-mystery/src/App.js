import logo from './logo.svg';
import './App.css';
import Nav from './my-components/navbar/Nav';
import IntroRocket from './my-components/introRocket/IntroRocket';
// import Modal from './my-components/modal/Modal';

import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './my-components/home/Home';
import FirstPage from './my-components/Pages/FirstPage';
import MyQuestions from './my-components/Pages/MyQuestions';
import CenturyBirdBuilding27 from './my-components/Pages/CenturyBirdBuilding27';
import Footer from './my-components/footer/Footer';
import CenturyCity26 from './my-components/Pages/CenturyCity26';
import CenturyLake27 from './my-components/Pages/CenturyLake27';
import CenturyPool26 from './my-components/Pages/CenturyPool26';
import CenturyTheLair27 from './my-components/Pages/CenturyTheLair27';
import QuetzPlainsv2 from './my-components/Pages/QuetzPlainsv2';
import TriceratopsRiverv2 from './my-components/Pages/TriceratopsRiverv2';
import Wipslime from './my-components/Pages/Wipslime';
import Alert from './my-components/alert/Alert';
import TimeMachineBasement from './my-components/Pages/TimeMachineBasement';
import AboutUs from './my-components/about/AboutUs';
import Quit from './my-components/quit/Quit';
import PoolBuilding from './my-components/Pages/PoolBuilding';
import InstructionModal from './my-components/instructions/InstructionModal';
// import Spline from '@splinetool/react-spline';
// import AboutUs from './LandingPages/AboutUs';


function App() {

  return (
    <div>
      <Nav></Nav>
      {/* <Alert></Alert> */}
      {/* <Footer/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/intro" element={<IntroRocket />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/ask" element={<MyQuestions />} />
        <Route path="/CenturyBirdBuilding27" element={<CenturyBirdBuilding27 />} />
        <Route path="/CenturyCity26" element={<CenturyCity26 />} />
        <Route path="/CenturyLake27" element={<CenturyLake27 />} />
        <Route path="/CenturyPool26" element={<CenturyPool26 />} />
        <Route path="/CenturyTheLair27" element={<CenturyTheLair27 />} />
        <Route path="/QuetzPlainsv2" element={<QuetzPlainsv2 />} />
        <Route path="/TriceratopsRiverv2" element={<TriceratopsRiverv2 />} />
        <Route path="/Wipslime" element={<Wipslime />} />
        <Route path="/TimeMachineBasement" element={<TimeMachineBasement />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Quit" element={<Quit />} />
        <Route path="/PoolBuilding" element={<PoolBuilding />} />
        <Route path="/InstructionModal" element={<InstructionModal />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
