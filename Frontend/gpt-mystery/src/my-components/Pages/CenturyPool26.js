import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Modal from '../modal/Modal';
import Footer from '../footer/Footer';
import Alert from '../alert/Alert';

function CenturyPool26() {
    const [mycentredModal, setMycentredModal] = useState(false);

    const toggleShow = () => setMycentredModal(!mycentredModal);

  return (
    <div>
        <Footer/>
        <Alert/>
        <Spline scene="https://prod.spline.design/8US0FGpUKzdxISkg/scene.splinecode" 
        onClick={() => {
        toggleShow();
        }}
        />

        <Modal prop1 = {mycentredModal} setMycentredModal={setMycentredModal} ></Modal>
    </div>
  )
}

export default CenturyPool26