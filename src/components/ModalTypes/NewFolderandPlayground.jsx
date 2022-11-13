import React from 'react'
import {Header,Heading} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'

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
        width: 90px;
    height: 32px;
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

function NewFolderandPlayground() {
  return ( 
  <>
   <Header style={{gap:"15px"}}>
      <Heading>Create New Folder and Playground</Heading>
      <IoCloseSharp/>
    </Header>
    <InputTag>
              <span>Enter Folder Name<InputTagStyling type="text" /></span>
              <span>Enter Card Name <InputTagStyling type="text" /></span>
    </InputTag>
             <SelectTag >
            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Phyton">Phyton</option>
           </SelectTag>
              <ButtonStyling>Create Playground</ButtonStyling>
    </>
  )
}

export default NewFolderandPlayground