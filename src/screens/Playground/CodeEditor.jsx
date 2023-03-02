import CodeMirror from '@uiw/react-codemirror'
import  {BiEditAlt,  BiImport, BiExport} from'react-icons/bi'
import Select from 'react-select'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Theme
import { githubDark , githubLight } from '@uiw/codemirror-theme-github'
import { duotoneDark,duotoneLight } from '@uiw/codemirror-theme-duotone'
import { dracula} from '@uiw/codemirror-theme-dracula'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import { okaidia } from '@uiw/codemirror-theme-okaidia'

import {indentUnit} from '@codemirror/language'
import {EditorState} from '@codemirror/state'


// Language
// import { cpp } from '@codemirror/lang-cpp'
// import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
// import { python } from '@codemirror/lang-python'


const CodeEditorContainer = styled.div`
      height: 100vh;
      width: 100vw;
      & > div{
        height: 100%;
      }
`
const UpperTool = styled.div`
      height: 2rem;
      position: absolute;
      z-index: 1;
      top:2px;
      right:0px;
`

const SelectBars =styled.div`
    display: flex;
    gap: 1rem;
    & > div{
      width: 10rem;
    }
`

// const handlebtn = () =>{
//   console.log("Hi Nehal")
// }

const LowerToolBar = styled.div`
height: 2rem;
/* color: white; */
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

function CodeEditor({
    currentLanguage,
    currentCode ,
    setCurrentCode,
    getFile
}) {
  const handleThemeChange = (selectedOptions)=>{
    setCurrentTheme(selectedOptions);
  }   
  const[currentTheme,setCurrentTheme] = useState({value:'githubDark', label:'Github Dark'});    
  const themeOptions =[
    {value:'githubDark', label:'Github Dark'},
    {value:'githubLight', label:'Github Light'},
    {value:'duotoneDark', label:'Duotone Dark'},
    {value:'duotoneLight', label:'Duotone Light'},
    {value:'dracula', label:'Dracula'},
    {value:'bespin', label:'Bespin'},
    {value:'xcodeDark', label:'Xcode Dark'},
    {value:'xcodeLight', label:'Xcode Light'},
    {value:'okaidia ', label:'Okaidia '},
  ]
  const[theme,setTheme] = useState(githubDark);
  const[language,setLanguage] = useState(javascript);

  
  useEffect(()=>{
    if(currentLanguage === 'javascript')
    setLanguage(javascript);
  },[currentLanguage])

  useEffect(()=>{
    if(currentTheme.value === 'githubDark')
    setTheme(githubDark)
    if(currentTheme.value === 'githubLight')
    setTheme(githubLight)
    if(currentTheme.value === 'duotoneDark')
    setTheme(duotoneDark)
    if(currentTheme.value === 'duotoneLight')
    setTheme(duotoneLight)
    if(currentTheme.value === 'dracula')
    setTheme(dracula)
    if(currentTheme.value === 'bespin')
    setTheme(bespin)
    if(currentTheme.value === 'xcodeDark')
    setTheme(xcodeDark)
    if(currentTheme.value === 'xcodeLight')
    setTheme(xcodeLight)
    if(currentTheme.value === 'okaidia')
    setTheme(okaidia)
  },[currentTheme.value])


  return (
    <CodeEditorContainer>
      <CodeMirror
        value={currentCode}
        height="100%"
        theme={theme}
        // extensions={[java({ jsx:  true })]}
        extensions={[
          language,
          indentUnit.of("        "),
          EditorState.tabSize.of(8),
          EditorState.changeFilter.of(() => true),
        ]}
        onChange={(value) => setCurrentCode(value)}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          history: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      >
        <UpperTool>
        <SelectBars>
          <div style={{
                display: "flex",
                justifyContent: "center",
                width: "25rem",
                alignItems: "center"
          }}>
            <LowerToolBar>
          <label htmlFor="codefile" style={{color:`${["xcodeDark","githubDark"].indexOf(currentTheme.value)!==-1 ? "white": "black" }`}}><BiImport /> <span>Import Code</span> 
          <input type="file" accept="." id='codefile' onChange={(e) => getFile(e, setCurrentCode)} /> 
        </label>
            </LowerToolBar>
          <Select
          options={themeOptions}
          value={currentTheme}
          onChange={handleThemeChange}
          />
          </div>
        </SelectBars>
     </UpperTool>
        {/* <button
          onClick={handlebtn}
          style={{
            position: "absolute",
            zIndex: "10",
            top: "10px",
            right: "10px",
          }}
        >
          Nehal
        </button> */}
      </CodeMirror>
    </CodeEditorContainer>
  );
}

export default CodeEditor