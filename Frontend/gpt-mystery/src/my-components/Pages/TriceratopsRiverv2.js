import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Modal from '../modal/Modal';
import Footer from '../footer/Footer';
import Alert from '../alert/Alert';

function TriceratopsRiverv2() {
    const [mycentredModal, setMycentredModal] = useState(false);

    const toggleShow = () => setMycentredModal(!mycentredModal);

  return (
    <div>
        <Footer nextPage = 'QuetzPlainsv2'/>
        <Alert/>
        <Spline scene="https://prod.spline.design/Sbv-1baAwQysLTSv/scene.splinecode"
        onClick={() => {
        toggleShow();
        }}
        />

        <Modal prop1 = {mycentredModal} setMycentredModal={setMycentredModal} ></Modal>
    </div>
  )
}

export default TriceratopsRiverv2