import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

import './Modal.css';

import gostImage from './gost.png';

export default function Modal (props) {

  const {prop1, setMycentredModal} = props;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const toggleShow = () => { 
    setMycentredModal(!prop1);
    setAnswer('');    
    setQuestion('');
  }

  const currentPageURL = window.location.href;

  const extractPathSegment = (url) => {
    const baseUrl = 'http://localhost:3000/';
    const path = url.replace(baseUrl, '');
    return path;
  };

  const pageURL = extractPathSegment(currentPageURL);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8080/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question, era: pageURL })
      });

      if (response.ok) {
        const data = await response.json();
        setAnswer(data.answer);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>

<MDBModal tabIndex='-1' show={prop1} setShow={setMycentredModal} className='dark-modal'>
  <MDBModalDialog centered>
    <MDBModalContent className='bg-dark text-secondary'>
      <MDBModalHeader>
        <MDBModalTitle>G.O.S.T</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>
        <MDBRow>
          <MDBCol size='4'>
            <img
              src={gostImage} // Replace with the image path you want to use
              alt='Background'
              style={{ width: '100%', height: 'auto' }}
            />
          </MDBCol>
          <MDBCol size='8'>
            <form onSubmit={handleSubmit}>
              <MDBTextArea
                label='Message'
                id='textAreaExample'
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className='bg-dark text-white'
              />

              <MDBRow>
                <MDBCol size='4'>
                  <MDBBtn color='danger' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                </MDBCol>
                <MDBCol size='8'>
                  <MDBBtn color='success'>Submit Question</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            <p>{answer}</p>
          </MDBCol>
        </MDBRow>
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

    </>
  );
}

