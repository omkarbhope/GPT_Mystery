import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function CongratsModal(props) {
  const {basicModal, setBasicModal, showOtherComponent,  setShowOtherComponent} = props;

  const toggleShow = () => {
    setBasicModal(!basicModal);
    setShowOtherComponent(!showOtherComponent);
  }

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            
            <MDBModalBody>
              <p>Congrats!! You did it! Great job!</p>
              <span role="img" aria-label="party emoji" style={{ fontSize: '2rem' }}>
                🥳
              </span>
              <MDBFooter>
              <MDBBtn
                  color="success"
                  className="my-3 px-4 py-3 rounded-pill"
                  style={{ minWidth: '400px' }}
                  onClick = {toggleShow}
                >
                  Next Level
                </MDBBtn>
              </MDBFooter>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}