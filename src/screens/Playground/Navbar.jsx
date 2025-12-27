import React from 'react'
import  logo  from '../../assests/logo.png'
import styled from 'styled-components'
import {  useNavigate } from 'react-router-dom'

const NavbarContainer = styled.div`
    background: var(--dark-bg);
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #333;
`

const NavbarContent = styled.button`
      background: transparent;
      border: 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: background-color 0.2s;
      
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
`

const Logo = styled.img`
    width: 45px;
`

const MainHeading = styled.div`
      font-size: 1.75rem;
      font-weight: 400;
      color: var(--white);
      font-family: 'Poppins', sans-serif;

      span{
        font-weight: 700;
        color: var(--primary-color);
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