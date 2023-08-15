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
  MDBFooter,
} from 'mdb-react-ui-kit';
import CongratsModal from '../congrats/CongratsModal';
// import { useNavigate } from 'react-router-dom';

function Password(props) {
    const {prop1, setMycentredModal, page} = props;
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('0');
    const [passwordHint, setPasswordHint] = useState('');
    const [score, setScore] = useState(0);
    // const [showOtherComponent, setShowOtherComponent] = useState(false);
    // const [basicModal, setBasicModal] = useState(true);

    const currentPageURL = window.location.href;

    const extractPathSegment = (url) => {
        const baseUrl = 'http://localhost:3000/';
        const path = url.replace(baseUrl, '');
        return path;
    };

    const pageURL = extractPathSegment(currentPageURL);

    // const navigate = useNavigate();

    const [dictionary, setDictionary] = useState([
        { currLevel: 'TimeMachineBasement', nextLevel: 'Wipslime' },
        { currLevel: 'QuetzPlainsv2', nextLevel: 'CenturyBirdBuilding27' },
        { currLevel: 'CenturyLake27', nextLevel: 'PoolBuilding' },
        { currLevel: 'PoolBuilding', nextLevel: 'intro' },
      ]);

    const element = dictionary.find(entry => entry.currLevel === pageURL);

    const toggleShow = () => { 
      setMycentredModal(!prop1);
      setAnswer('');    
      setQuestion('');
    }

    // const toggleBasicModal = () => {
    //     setShowOtherComponent(!showOtherComponent);
    //     setMycentredModal(!prop1);
    // }

  useEffect(() => {
    async function goToNextPage() {
      try {

        const score = parseInt(answer, 10);
        console.log(score);

        if(score >= 85) {
            window.location.href = '/' + element.nextLevel;
            console.log("Yesssssss bro");
            setAnswer('0');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    goToNextPage();
  }, [answer]);

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:8080/passwordHint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ era: page })
            });

            if (response.ok) {
            const data = await response.json();
            setPasswordHint(data.passwordHint);
            } else {
            console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        }

        fetchData();
    }, [page]);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://127.0.0.1:8080/password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ password: question, era: page })
        });
  
        if (response.ok) {
          const data = await response.json();
          setAnswer(data.answer);
          setScore(parseInt(data.answer, 10));
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return (
        <>
    
            <MDBModal tabIndex='-1' show={prop1} setShow={setMycentredModal}>
            <MDBModalDialog centered>
                <MDBModalContent className='bg-dark text-secondary'>
                <MDBModalHeader>
                    <MDBModalTitle> ENTER PASSWORD: </MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                <MDBRow>
                    <MDBCol size='4' className='bg-dark text-secondary'>
                    {passwordHint}
                    </MDBCol>
                    <MDBCol size='8'>
                        <form onSubmit={handleSubmit}>
                            <MDBTextArea 
                            label='Message' 
                            id='textAreaExample' 
                            rows={4} 
                            value = {question} 
                            onChange = {(e) => setQuestion(e.target.value)} 
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
                        <p>
                            {answer}
                        </p>
                    </MDBCol>
                </MDBRow>
                </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
            </MDBModal>
        </>
    );
    
}

export default Password