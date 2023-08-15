// import Modal from './my-components/modal/Modal';

import React, { useState } from 'react';

import Spline from '@splinetool/react-spline';
import Modal from '../modal/Modal';
import './introRocket.css';

function IntroRocket() {
    const [showFirstComponent, setShowFirstComponent] = useState(true);

    const toggleComponent = () => {
        setShowFirstComponent(!showFirstComponent);
    };

    const [mycentredModal, setMycentredModal] = useState(false);

    const toggleShow = () => setMycentredModal(!mycentredModal);

  return (

    <div >
        <div className="spline-container">
            {showFirstComponent ? (
            // <Spline scene="https://prod.spline.design/fsxCiD1ysa6U9mhT/scene.splinecode" 
            <Spline scene="https://prod.spline.design/4tN9pTOzhDdpxaoO/scene.splinecode"
            onClick={() => {
            toggleComponent();
            toggleShow();
            }} 
            />
        ) : (
            <Spline scene="https://prod.spline.design/7NLTV2p5-ciHUgLP/scene.splinecode" 
            onClick={() => {
            toggleComponent();
            }}
            />
        )}
        </div>
        
      <Modal prop1 = {mycentredModal} setMycentredModal={setMycentredModal} ></Modal>

    </div>
  )
}

export default IntroRocket