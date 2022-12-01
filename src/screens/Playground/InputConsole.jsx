import React from 'react'
import styled from 'styled-components'
import {BiImport} from'react-icons/bi'    

export const Console = styled.div`
  background:#fff;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
    height: 4rem;
    background: gray;
    padding: 0 1rem;
    font-size: 1.2  5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
  input{
    display: none;
  }
  label, a{
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: black;
  }
`
export const TextArea = styled.textarea`
   resize: none;
   border: 0;
   outline: 0;
   padding: 0.25rem;
   z-index: 2 ;
   padding-top: 0.5rem;
   flex-grow: 1;
   font-size: 1.1rem;
   color: black;
`
function InputConsole({currentInput, setCurrentInput, getFile}) {
  return (
    <Console>
    <Header>
      Input:
      <label htmlFor="inputfile">
            <input type="file" accept="." id='inputfile' onChange={(e) => getFile(e, setCurrentInput)} /> <BiImport /> Import Input
          </label>
    </Header>
    <TextArea
    onChange={(e)=>setCurrentInput(e.target.value)}
    value = {currentInput}
    />
    </Console>
  )
}

export default InputConsole