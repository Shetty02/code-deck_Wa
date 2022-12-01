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

    & > div{
      width: 10rem;
    }
`
const Button = styled.button`
padding: 0.6rem 1rem;
border-radius: 32px;
background-color: #0097d7;
border: none;
font-weight:700;
cursor: pointer;
`
export const LowerToolBar = styled.div`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;

span{
  cursor: pointer;
}
input{
  display:none;
}
label{
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  gap: .7rem;
}
`
const AnchorTag = styled.a`
    text-decoration: none;  
    font-size: 1.2rem;
    color: black;
`
function  EditorContainer({
  title,
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
      {value:'cpp', label:'cpp'},
      {value:'java', label:'java'},
      {value:'javascript', label:'javascript'},
      {value:'python', label:'python'},

    ]

    const handleThemeChange = (selectedOptions)=>{
      setCurrentTheme(selectedOptions);
    }
    const handleLanguageChange = (selectedOptions)=>{
      setLanguage(selectedOptions);
      setCurrentLanguage(selectedOptions.value);
      setCurrentCode(LanguageMap[selectedOptions.value].defaultCode);
    }
    const[currentTheme,setCurrentTheme] = useState({value:'githubDark', label:'githubDark'});
    const[language,setLanguage] = useState(() => {
      for(let i = 0; i < languageOptions.length; i++){
        if(languageOptions[i].value === currentLanguage){
          return languageOptions[i];
        }
      }
      return languageOptions[0];
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
            <Button onClick={saveCode}>save code</Button>
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
        currentTheme = {currentTheme.value}
        currentCode = {currentCode}
        setCurrentCode = {setCurrentCode}
        />
        <LowerToolBar>
          <label htmlFor="codefile"><BiImport /> <span>Import Code</span> 
            <input type="file" accept="." id='codefile' onChange={(e) => getFile(e, setCurrentCode)} /> 
          </label>

            <AnchorTag
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            setCurrentCode
            )}`        
          }
          download="output.txt"
          >
          <BiExport /> Export Code
        </AnchorTag>

          <Button onClick={runCode}>Run Code</Button>
        </LowerToolBar>
        </StyledEditorContainer>
  )
}

export default EditorContainer