import React, {useContext} from 'react'
import {Header,Heading} from '../Modal'
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
function NewPlayground() {
  const {closeModal} = useContext(ModalContext);
  return (
    <>
     <Header>
      <Heading>Create New Playground</Heading>
      <IoCloseSharp onClick={()=>closeModal()}/>
    </Header>

    <InputTag>
           <InputTagStyling type="text"/>
           <SelectTag >
            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="Phyton">Phyton</option>
           </SelectTag>
    </InputTag>
           <ButtonStyling>Create Folder</ButtonStyling>

           {/* <InputTag>
        <InputTagStyling type="text"/>
        <ButtonStyling>Create Folder</ButtonStyling>
    </InputTag> */}
   </>
  )
}

export default NewPlayground