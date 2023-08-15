import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

const Footer = (props) => {
  
  const { nextPage } = props
  const navigate = useNavigate();
//   const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    // Replace 'next-link' with the desired link for the "Next" button
    navigate("/" + nextPage);
  };

  return (
    <MDBCard className="bg-dark text-white p-2">
      <MDBCardBody className="p-2">
        <div className="d-flex justify-content-between">
          <MDBBtn color="danger" className="p-2 m-0 align-self-center rounded-pill" onClick={handleBack}
          style={{ minWidth: '200px'}}>
            Back
          </MDBBtn>
          <div
            className="text-center"
            style={{
              fontFamily: 'Visitor', // Replace with the desired gaming font
              fontSize: '24px', // Adjust the font size as needed
              fontWeight: 'bold', // Make the text bold
              textTransform: 'uppercase', // Uppercase the text
              color: 'grey', // Change the text color
            }}
          > Game Controls </div>
          <MDBBtn color="success" className="p-2 m-0 align-self-center rounded-pill" onClick={handleNext}
          style={{ minWidth: '200px'}}>
            Next
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Footer;
