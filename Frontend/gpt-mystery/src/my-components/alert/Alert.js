import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Alert() {
  const [isCardVisible, setCardVisible] = useState(true);
  const [objective, setObjective] = useState("");
  const [story, setStory] = useState("");

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  const currentPageURL = window.location.href;

  const extractPathSegment = (url) => {
    const baseUrl = 'http://localhost:3000/';
    const path = url.replace(baseUrl, '');
    return path;
  };

  const page = extractPathSegment(currentPageURL);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8080/objective', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ era: page })
        });

        if (response.ok) {
          const data = await response.json();
          setObjective(data.objective);
          setStory(data.story);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();
  }, [page]);

  return (
    <>
      {isCardVisible && (
        <MDBCard className="bg-secondary text-white">
          <MDBCardHeader className="d-flex justify-content-between align-items-center">
            G.O.S.T HINT :----
            <button
              type="button"
              className="btn-close text-white"
              aria-label="Close"
              onClick={handleCloseCard}
            ></button>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBTypography blockquote className="mb-0">
              <p>
                {objective}
              </p>
              <footer className="blockquote-footer">
                {story}
              </footer>
            </MDBTypography>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
}
