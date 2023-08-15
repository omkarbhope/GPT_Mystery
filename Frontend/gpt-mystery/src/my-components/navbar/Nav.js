import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Password from '../password/Password';
import gostImage from './gost.png';

export default function Nav() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  const [mycentredModal, setMycentredModal] = useState(false);
  const toggleShow = () => setMycentredModal(!mycentredModal);

  const [controls, setControls] = useState(false);

  const currentPageURL = window.location.href;

  const extractPathSegment = (url) => {
    const baseUrl = 'http://localhost:3000/';
    const path = url.replace(baseUrl, '');
    return path;
  };

  const pageURL = extractPathSegment(currentPageURL);

  const [myPage, setMyPage] = useState(false);

  useEffect(() => {
    if (pageURL === 'TimeMachineBasement' || pageURL === 'QuetzPlainsv2' || pageURL === 'CenturyLake27' || pageURL === 'PoolBuilding' ) {
      setMyPage(true);
    } else {
      setMyPage(false);
    }
  }, [pageURL]);  

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <img
              src={gostImage} // Replace with the image path you want to use
              alt='Background'
              style={{ width: 'auto', height: '40px' }}
            />
          <MDBNavbarBrand href='#'>ExpirAItion Date</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/AboutUs'>About Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink  href='/InstructionModal' tabIndex={-1} aria-disabled='true'>
                  Controls
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBBtn outline onClick={() => { toggleShow();}}>Enter Password</MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {myPage && <Password prop1={mycentredModal} setMycentredModal={setMycentredModal} page={pageURL} />}

    </>
  );
}