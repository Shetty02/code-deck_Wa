import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import  {BiEditAlt,  BiImport, BiExport} from'react-icons/bi'
import {ModalContext} from '../../context/ModalContext'
import Select from 'react-select'
import { LanguageMap } from '../../context/PlaygroundContext'
const StyledEditorContainer = styled.div`
      display: flex;
      flex-direction: column;
`
const Title = styled.div`
    display:flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.3rem;
    cursor: pointer; 
`


const Button = styled.button`
padding: 0.6rem 1rem;
border-radius: 32px;
background-color: #0097d7;
border: none;
font-weight:700;
cursor: pointer;
`

const AnchorTag = styled.a`
    text-decoration: none;  
    font-size: 1.2rem;
    color: black;
`
function  EditorContainer({
  currentLanguage,
   setCurrentLanguage,
   currentCode,
   setCurrentCode, 
   folderId,
   playgroundId,
   saveCode,
   runCode,
   getFile
  }) {

    const {openModal} = useContext(ModalContext)

    const languageOptions = [
      {value:'javascript', label:'Javascript'},
    ]
    const[language,setLanguage] = useState(() => {
      for(let i = 0; i < languageOptions.length; i++){
        if(languageOptions[i].value === currentLanguage){
          return languageOptions[i];
        }
      }
      return languageOptions[0];
         });

  return (
    // <StyledEditorContainer>
        <CodeEditor
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        currentCode = {currentCode}
        setCurrentCode = {setCurrentCode}
        getFile = {getFile}
        saveCode={saveCode}
        runCode={runCode}
        />
        // </StyledEditorContainer>
  )
}

export default EditorContainer