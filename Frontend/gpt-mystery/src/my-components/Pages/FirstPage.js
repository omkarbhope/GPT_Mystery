import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Modal from '../modal/Modal';
import Footer from '../footer/Footer';

function FirstPage() {
    const [mycentredModal, setMycentredModal] = useState(false);

    const toggleShow = () => setMycentredModal(!mycentredModal);

  return (
    <div>
        <Footer/>
        <Spline scene="https://prod.spline.design/8US0FGpUKzdxISkg/scene.splinecode" 
        onClick={() => {
        toggleShow();
        }}
        />

        <Modal prop1 = {mycentredModal} setMycentredModal={setMycentredModal} ></Modal>
    </div>
  )
}

export default FirstPage