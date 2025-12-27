import React, { useContext, useState } from 'react'
import { CloseButton, Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
`

const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`

const StyledButton = styled.button`
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: flex-end;
  min-width: 150px;

  &:hover {
    background-color: var(--primary-hover);
  }
`

function NewFolder() {
  const { closeModal } = useContext(ModalContext);
  const { addFolder } = useContext(PlaygroundContext);

  const [folderTitle, setFolderTitle] = useState("");
  return (
    <>
      <Header>
        <Heading>Create New <span>Folder</span></Heading>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <FormContainer>
        <FormGroup>
          <Label>Folder Name</Label>
          <StyledInput
            type="text"
            placeholder="Enter folder title"
            onChange={(e) => setFolderTitle(e.target.value)}
          />
        </FormGroup>
        <StyledButton
          onClick={() => {
            addFolder(folderTitle);
            closeModal();
          }}
        >
          Create Folder
        </StyledButton>
      </FormContainer>
    </>
  )
}

export default NewFolder