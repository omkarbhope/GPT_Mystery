import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can implement the actual submission logic here
  };

  return (
    <MDBContainer className="py-6">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
            <div className="mb-3">
              <MDBInput label="Your Name" type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <MDBInput label="Your Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <MDBInput label="Your Message" type="textarea" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" color="primary" className="w-100">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactUs;
