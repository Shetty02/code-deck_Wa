import React,{useContext} from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'
import {ModalContext} from '../../context/ModalContext'

const StyleLeftComponent = styled.div`
    width: 40%;
    min-height: 100vh;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
      width: 100%;
      min-height: auto;
      padding: 3rem 1rem;
    }
`

const ContentContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white);
    margin-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    
    span {
        font-weight: 700;
        color: var(--primary-color);
    }
`

const SubHeading = styled.p`
    font-size: 1.25rem;
    color: var(--text-light);
    opacity: 0.8;
    margin-bottom: 2rem;
`

const AddPlayGround = styled.button`
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 50px;
    border: none;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;

    span {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }
`

function LeftComponent() {
    const {openModal} = useContext(ModalContext);
  return (
    <StyleLeftComponent>
        <ContentContainer>
            {/* <img src="/logo.png" alt="" />  this way used when files/imgs are in public file */}
            <Logo src={logo} alt="" /> 
            <MainHeading><span>Code</span> Deck</MainHeading> 
            <SubHeading>Code. Compile. Debug.</SubHeading>
            <AddPlayGround onClick={()=>openModal({
            show:true,
            modalType:3,
            identifiers:{
                folderId:"",
                cardId:"",
            }
    })}> <span>+</span> Create New Playground</AddPlayGround>
        </ContentContainer>
    </StyleLeftComponent>
  )
}

export default LeftComponent