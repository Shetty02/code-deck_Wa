import React from 'react'
import styled from 'styled-components'
import {NewFolder, NewPlayground, NewFolderandPlayground, EditCardTitle, EditFolderTitle } from './ModalTypes'

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
function Modal() {
  const type = 5 ;
  return (
    <ModalContainer>
        <ModalContent>
          {type === 1 && <NewFolder/>}
          {type === 2 &&  <NewPlayground/>}
          {type === 3 && <NewFolderandPlayground/>}
          {type === 4 && <EditCardTitle/>}
          {type === 5 && <EditFolderTitle/>}
         
          
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal