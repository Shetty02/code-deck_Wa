import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'

const StyleLeftComponent = styled.div`
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #241f21;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentContainer = styled.div`
    text-align: center;
`
const Logo = styled.img`
    width: 165px;
    margin-bottom:.75rem;
`
const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom:.75rem;
`
const SubHeading = styled.p`
font-size: 1.75rem;
color: #fff;
margin-bottom:.75rem;
`
const AddPlayGround = styled.button`
padding: .75rem 1.75rem;
font-size: 1.25rem;
border-radius: 30px;

span{
    font-size: 1.5rem;
    font-weight: 700;
}

&:hover{
    cursor: pointer;
}
`

function LeftComponent() {
  return (
    <StyleLeftComponent>
        <ContentContainer>
            {/* <img src="/logo.png" alt="" />  this way used when files/imgs are in public file */}
            <Logo src={logo} alt="" /> 
            <MainHeading>Code Deck</MainHeading> 
            <SubHeading>Code. Compile. Develope.</SubHeading>
            <AddPlayGround> <span>+</span> Create PlayGround</AddPlayGround>
        </ContentContainer>
    </StyleLeftComponent>
  )
}

export default LeftComponent