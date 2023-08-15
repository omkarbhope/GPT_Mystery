import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Modal from '../modal/Modal';
import Footer from '../footer/Footer';
import Alert from '../alert/Alert';

function CenturyBirdBuilding27() {
    const [mycentredModal, setMycentredModal] = useState(false);

    const toggleShow = () => setMycentredModal(!mycentredModal);

  return (
    <div>
        <Footer nextPage = 'CenturyTheLair27'/>
        <Alert/>
        <Spline scene="https://prod.spline.design/DZbCR1WiQg8icSmH/scene.splinecode"
        onClick={() => {
        toggleShow();
        }}
        />

        <Modal prop1 = {mycentredModal} setMycentredModal={setMycentredModal} ></Modal>
    </div>
  )
}

export default CenturyBirdBuilding27