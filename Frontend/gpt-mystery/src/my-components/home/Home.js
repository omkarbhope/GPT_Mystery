import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import backgroundImage from './updatedPoster.png'; // Replace with your image path
import CongratsModal from '../congrats/CongratsModal';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div
          className="position-relative d-flex align-items-end"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        >
          <MDBContainer className="d-flex flex-column justify-content-end align-items-center text-center pb-5">
            <MDBRow>
              <MDBCol>
                <MDBBtn
                  color="primary"
                  className="my-3 px-4 py-3 rounded-pill"
                  style={{ minWidth: '200px', backgroundColor: 'rgba(33, 150, 243, 0.5)' }}
                >
                    <Link to = "/CenturyCity26" className="text-white">PLAY</Link>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn
                  color="info"
                  className="my-3 px-4 py-3 rounded-pill"
                  style={{ minWidth: '200px', backgroundColor: 'rgba(108, 117, 125, 0.5)' }}
                >
                  <Link to = "/InstructionModal" className="text-white">CONTROLS</Link>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBBtn
                  color="danger"
                  className="my-3 px-4 py-3 rounded-pill"
                  style={{ minWidth: '200px', backgroundColor: 'rgba(23, 162, 184, 0.5)' }}
                >
                  <Link to = "/intro" className="text-white">QUIT</Link>
                </MDBBtn>
                {/* <CongratsModal/> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        </div>
        
      );
};

export default Home;
