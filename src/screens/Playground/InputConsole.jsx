import React from 'react'
import styled from 'styled-components'


export const Console = styled.div`
  background:#fff;
  display: flex;
  flex-direction: column;
`
export const Header = styled.div`
    height: 4rem;
    background: gray;
    padding: 0 1rem;
    font-size: 1.45rem;
    font-weight: 700;
    display: flex;
    align-items: center;
  
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
   color: blue;
`
function InputConsole({currentInput, setCurrentInput}) {
  return (
    <Console>
    <Header>
      Input:
    </Header>
    <TextArea
    onChange={(e)=>setCurrentInput(e.target.value)}
    value = {currentInput}
    />
    </Console>
  )
}

export default InputConsole