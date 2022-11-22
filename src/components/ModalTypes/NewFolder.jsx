import React,{useContext, useState} from 'react'
import {CloseButton, Header} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

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
  const {addFolder} = useContext(PlaygroundContext);

  const[folderTitle,setFolderTitle] = useState("");
  return (
    <>
    <Header>
      <h2>Create New Folder</h2>
      <CloseButton onClick={()=>closeModal()}>
      <IoCloseSharp/>
      </CloseButton>
    </Header>
    <InputTag>
        <InputTagStyling type="text" onChange={(e)=>setFolderTitle(e.target.value)}/>
        <ButtonStyling
        onClick={()=>{
          addFolder(folderTitle);
          closeModal();
        }}
        >
          Create Folder</ButtonStyling>
    </InputTag>
    </>
  )
}

export default NewFolder