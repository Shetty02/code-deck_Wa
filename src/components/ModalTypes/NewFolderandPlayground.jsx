import React ,{useContext} from 'react'
import {Header,Heading} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'
import { ModalContext } from '../../context/ModalContext'

const InputTag = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`
const InputTagStyling = styled.input`
    margin: 5px;
    width: 250px;
    height: 25px;
    
`
const SelectTag = styled.select`
     width: 120px;
    height: 35px;
    margin: 10px;
`
const ButtonStyling = styled.button`
       background-color: black;
    color: white;
    margin: 5px;
    width: 250px;
    height: 25px;
    font-size: .8rem;
`
const SpanTag = styled.span`
    display: grid;
    grid-template-columns: .8fr .6fr;
    justify-content: center;
    align-items: center;
`

function NewFolderandPlayground() {
  const {setIsOpenModal} = useContext(ModalContext)
  return ( 
  <>
   <Header style={{gap:"15px"}}>
      <Heading>Create New Folder and Playground</Heading>
      <IoCloseSharp onClick={()=>setIsOpenModal(false)} style = {{cursor:"pointer"}}/>
    </Header>
    <InputTag>
              <SpanTag>Enter Folder Name<InputTagStyling type="text" /></SpanTag>
              <SpanTag>Enter Card Name <InputTagStyling type="text" /></SpanTag>
    </InputTag>
    <SpanTag>

             <SelectTag >
            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Phyton">Phyton</option>
           </SelectTag>
              <ButtonStyling>Create Playground</ButtonStyling>
    </SpanTag>
    </>
  )
}

export default NewFolderandPlayground