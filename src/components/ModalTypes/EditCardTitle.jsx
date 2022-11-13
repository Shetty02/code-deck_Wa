import React from 'react'
import {Header,Heading} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'


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
function EditCardTitle() {
  return (
  <>
    <Header>
      <Heading>Edit Card Title</Heading>
      <IoCloseSharp />
    </Header>
    <InputTag>
        <InputTagStyling type="text"/>
        <ButtonStyling>Update Title</ButtonStyling>
    </InputTag>
    </>
  )
}

export default EditCardTitle