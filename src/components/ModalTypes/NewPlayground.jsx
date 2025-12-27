import React, { useContext, useState } from 'react'
import { CloseButton, Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components'
import Select from 'react-select'
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

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;
  margin-top: 0.5rem;
`

const StyledButton = styled.button`
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-hover);
  }
`

function NewPlayground() {
  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" }
  ];

  const [language, setLanguage] = useState(languageOptions[3]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  }
  const { closeModal, isOpenModal } = useContext(ModalContext);
  const { folderId } = isOpenModal.identifiers;
  const { addCard } = useContext(PlaygroundContext);

  const [cardTitle, setCardTitle] = useState("");
  return (
    <>
      <Header>
        <Heading>Create New <span>Playground</span></Heading>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>

      <FormContainer>
        <FormGroup>
          <Label>Playground Name</Label>
          <StyledInput
            type="text"
            placeholder="Enter playground title"
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </FormGroup>
        <Footer>
          <Select
            options={languageOptions}
            value={language}
            onChange={handleLanguageChange}
            styles={{
              control: (base) => ({
                ...base,
                padding: '2px',
                borderRadius: '8px',
                borderColor: 'var(--border-color)',
                boxShadow: 'none',
                '&:hover': {
                  borderColor: 'var(--primary-color)'
                }
              })
            }}
          />
          <StyledButton
            onClick={() => {
              addCard(folderId, cardTitle, language.value)
              closeModal()
            }}
          >Create Playground</StyledButton>
        </Footer>
      </FormContainer>
    </>
  )
}

export default NewPlayground
