import React from 'react'
import  logo  from '../../assests/logo.png'
import styled from 'styled-components'
import {  useNavigate } from 'react-router-dom'

const NavbarContainer = styled.div`
    background:#241f21;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

`
const NavbarContent = styled.button`
      background: transparent;
      border: 0;

      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;

`
const Logo = styled.img`
    width: 60px;
`
const MainHeading = styled.div`
      font-size: 2rem;
      font-weight: 400;
      color: white;

      span{
        font-weight: 700;
      }
`
function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarContent
        onClick={()=>navigate('/')}>
        <Logo src={logo} />
        <MainHeading>
        <span>Code</span>Deck
        </MainHeading>
      </NavbarContent>
      </NavbarContainer>
  )
}

export default Navbar