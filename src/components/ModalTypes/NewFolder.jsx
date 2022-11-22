import React,{useContext} from 'react'
import {CloseButton, Header} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'
import { ModalContext } from '../../context/ModalContext'

const InputTag = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
`
const InputTagStyling = styled.input`
      margin: 5px;
    width: 250px;
    height: 25px;
`
const ButtonStyling = styled.button`
       background-color: black;
    color: white;
    margin: 10px;
    width: 125px;
    height: 25px;
    font-size: .8rem;
`
function NewFolder() {
  const {closeModal} = useContext(ModalContext);
  return (
    <>
    <Header>
      <h2>Create New Folder</h2>
      <CloseButton onClick={()=>closeModal()}>
      <IoCloseSharp/>
      </CloseButton>
    </Header>
    <InputTag>
        <InputTagStyling type="text"/>
        <ButtonStyling>Create Folder</ButtonStyling>
    </InputTag>
    </>
  )
}

export default NewFolder