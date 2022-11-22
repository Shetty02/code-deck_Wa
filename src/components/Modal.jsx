import React, {useContext} from 'react'
import styled from 'styled-components'
import {NewFolder, NewPlayground, NewFolderandPlayground, EditCardTitle, EditFolderTitle } from './ModalTypes'
import { ModalContext } from '../context/ModalContext'

const ModalContainer = styled.div`
        position:fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
        
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        `
const ModalContent = styled.div`
        background-color: #fff;
        padding: .5rem;
        border-radius: 5px;
        /* margin: 5px; */
    
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.75rem 0;
    font-size:1rem;
    gap: 10rem;

`
export const Heading = styled.h3`
    /* font-size:1.5rem; */
    font-weight: 400;

    span{
      font-weight: 700;
    }
`
export const CloseButton = styled.button`
        background: transparent;
        font-size: 2rem;
        cursor: pointer;
        border: 0;
`
export const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 0;
      gap: 2rem;
      padding-bottom: 0;


      input{
        flex-grow: 1;
        height: 2rem;
      }

      button{
        background: #241f21;
        height: 2rem;
        color: white;
        padding: 0 2rem;
      }
`
function Modal() {
  const {isOpenModal} = useContext(ModalContext);
  const {modalType} = isOpenModal
  // const type = 1 ;
  return (
    <ModalContainer>
        <ModalContent>
          {modalType === 1 && <NewFolder />}
          {modalType === 2 &&  <NewPlayground/>}
          {modalType === 3 && <NewFolderandPlayground />}
          {modalType === 4 && <EditCardTitle/>}
          {modalType === 5 && <EditFolderTitle/>}
         
          
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal