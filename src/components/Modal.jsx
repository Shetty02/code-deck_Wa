import React, {useContext} from 'react'
import styled from 'styled-components'
import {NewFolder, NewPlayground, NewFolderandPlayground, EditCardTitle, EditFolderTitle, Loading} from './ModalTypes'
import { ModalContext } from '../context/ModalContext'

const ModalContainer = styled.div`
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
        
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
`
const ModalContent = styled.div`
        background-color: var(--white);
        padding: 2rem;
        width: 90%;
        max-width: 500px;
        border-radius: 16px;
        box-shadow: var(--shadow-lg);
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`
export const Heading = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    color: var(--text-main);

    span{
      font-weight: 700;
      color: var(--primary-color);
    }
`
export const CloseButton = styled.button`
        background: transparent;
        font-size: 1.5rem;
        cursor: pointer;
        border: 0;
        outline: 0;
        color: var(--text-light);
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
          color: var(--text-main);
        }
`
export const Input = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: 1rem;

      input{
        flex-grow: 1;
        height: 44px;
        padding: 0 1rem;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        font-size: 1rem;
        outline: none;
        
        &:focus {
           border-color: var(--primary-color);
           box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
      }

      button{
        background: var(--primary-color);
        height: 44px;
        color: white;
        padding: 0 1.5rem;
        border-radius: 8px;
        border: none;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
        
        &:hover {
           background-color: var(--primary-hover);
        }
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
          {modalType === 6 && <Loading/>}
         
          
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal