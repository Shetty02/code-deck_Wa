import React, { useContext, useState } from 'react'
import CodeEditor from './CodeEditor'
import styled from 'styled-components'
import  {BiEditAlt} from'react-icons/bi'
import {ModalContext} from '../../context/ModalContext'
import Select from 'react-select'
const StyledEditorContainer = styled.div`
      display: flex;
      flex-direction: column;
`

const UpperTool = styled.div`
      background: #fff;
      height: 4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem;
`
const Title = styled.div`
    display:flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.3rem;
    cursor: pointer; 
`

const SelectBars =styled.div`
    display: flex;
    gap: 1rem;
`
const Button = styled.button`
border-radius: 5px;
background-color: blue;
border: none;
`
function EditorContainer({
  title,
  currentLanguage,
   setCurrentLanguage,
   currentCode,
   setCurrentCode, 
   folderId,
   playgroundId}) {

    const {openModal} = useContext(ModalContext)

    const languageOptions = [
      {value:'cpp', label:'cpp'},
      {value:'java', label:'java'},
      {value:'javascript', label:'javascript'},
      {value:'phyton', label:'phyton'},

    ]

    const handleThemeChange = (selectedOptions)=>{
      setCurrentTheme(selectedOptions);
    }
    const handleLanguageChange = (selectedOptions)=>{
      setLanguage(selectedOptions);
    }
    const[currentTheme,setCurrentTheme] = useState({value:'githubDark', label:'githubDark'});
    const[language,setLanguage] = useState(()=>{
      for(let i = 0; i < languageOptions.length; i++){
        if(languageOptions[i].value === currentLanguage){
          return languageOptions[i].value;
        }
      }
      return languageOptions[0].value
    });
    // const[code,setCode] = useState(`console.log('hello world!');`)

    const themeOptions =[
      {value:'githubDark', label:'githubDark'},
      {value:'githubLight', label:'githubLight'},
      {value:'duotoneDark', label:'duotoneDark'},
      {value:'duotoneLight', label:'duotoneLight'},
      {value:'dracula', label:'dracula'},
      {value:'bespin', label:'bespin'},
      {value:'xcodeDark', label:'xcodeDark'},
      {value:'xcodeLight', label:'xcodeLight'},
      {value:'okaidia ', label:'okaidia '},
    ]
  return (
    <StyledEditorContainer>
      <UpperTool>
          <Title>
           <h3> {title}</h3>
            <BiEditAlt
            onClick={()=>openModal({
              show: true,
              modalType:4,
              identifiers:{
                  folderId:folderId,
                  cardId:playgroundId,
              }
      })}
            />
          </Title>
          <SelectBars>
            <Button>save code</Button>
            <Select
            options={languageOptions}
            value={language}
            onChange={handleLanguageChange}
            />
            <Select
            options={themeOptions}
            value={currentTheme}
            onChange={handleThemeChange}
            />
          </SelectBars>
       </UpperTool>
        <CodeEditor
        currentLanguage={currentLanguage}
        currentTheme = {currentTheme}
        currentCode = {currentCode}
        setCurrentCode = {setCurrentCode}
        />
        </StyledEditorContainer>
  )
}

export default EditorContainer