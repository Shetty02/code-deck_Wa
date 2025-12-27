import React from 'react'
import styled from 'styled-components'
import {BiImport} from'react-icons/bi'    

export const Console = styled.div`
  background: var(--dark-bg);
  display: flex;
  flex-direction: column;
  border-left: 1px solid #333;
`
export const Header = styled.div`
    height: 4rem;
    background: var(--dark-layer);
    padding: 0 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    
  input{
    display: none;
  }
  label, a{
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
    
    &:hover {
        color: var(--primary-color);
    }
  }
`
export const TextArea = styled.textarea`
   resize: none;
   border: 0;
   outline: 0;
   padding: 1rem;
   flex-grow: 1;
   font-size: 1rem;
   background-color: var(--dark-bg);
   color: var(--white);
   font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
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