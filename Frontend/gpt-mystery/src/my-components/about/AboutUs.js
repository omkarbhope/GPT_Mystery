import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBBtn, MDBCardTitle } from 'mdb-react-ui-kit';
import image1 from './EricaAboutUs.png';
import image2 from './JacobAboutUs.png';
import image3 from './RowanAboutUs.png';
import image4 from './MarcusAboutUs.png';
import image5 from './OmkarAboutUs.png';
import image6 from './MarriamAboutUs.png';
import ContactUs from '../contact/ContactUs';

const AboutUs = () => {
  const cardData = [
    { image: image1, title: 'Erica Rice', description: 'Programmer' },
    { image: image2, title: 'Jacob Walters', description: 'Artist' },
    { image: image3, title: 'Rowan Freemont', description: 'Designer' },
    { image: image6, title: 'Mariam Salem', description: 'Programmer' },
    { image: image4, title: 'Marcus Colman', description: 'Project Manager' },
    { image: image5, title: 'Omkar Bhope', description: 'Coach' },
    
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center">About Us</h2>
      
      <div className="row">
        {cardData.slice(0, 3).map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <MDBCard className="h-100">
              <MDBCardImage src={card.image} position="top" alt={`Card ${index + 1}`} />
              <MDBCardBody>
                <MDBCardTitle>{card.title}</MDBCardTitle>
                <MDBCardText>{card.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>

      <div className="row mt-4">
        {cardData.slice(3).map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <MDBCard className="h-100">
              <MDBCardImage src={card.image} position="top" alt={`Card ${index + 4}`} />
              <MDBCardBody>
                <MDBCardTitle>{card.title}</MDBCardTitle>
                <MDBCardText>{card.description}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    
      <ContactUs/>
    </div>
  );
};

export default AboutUs;
