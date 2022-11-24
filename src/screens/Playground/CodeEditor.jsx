import CodeMirror from '@uiw/react-codemirror'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Theme
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { duotoneDark,duotoneLight } from '@uiw/codemirror-theme-duotone'
import { dracula} from '@uiw/codemirror-theme-dracula'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import { okaidia } from '@uiw/codemirror-theme-okaidia'

import {indentUnit} from '@codemirror/language'
import {EditorState} from '@codemirror/state'


// Language
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'


const CodeEditorContainer = styled.div`
      height: calc(100vh - 12.5rem);

      & > div{
        height: 100%;
      }
`

function CodeEditor({
  currentLanguage,
    currentTheme,
   currentCode ,
  setCurrentCode,
}) {
   
    
  const[theme,setTheme] = useState(githubDark);
  const[language,setLanguage] = useState(javascript);

  
  useEffect(()=>{
    if(currentLanguage === 'cpp')
    setLanguage(cpp);
    if(currentLanguage === 'java')
    setLanguage(java);
    if(currentLanguage === 'javascript')
    setLanguage(javascript);
    if(currentLanguage === 'python')
    setLanguage(python);
  },[currentLanguage])

  useEffect(()=>{
    if(currentTheme === 'githubDark')
    setTheme(githubDark)
    if(currentTheme === 'githubLight')
    setTheme(githubLight)
    if(currentTheme === 'duotoneDark')
    setTheme(duotoneDark)
    if(currentTheme === 'duotoneLight')
    setTheme(duotoneLight)
    if(currentTheme === 'dracula')
    setTheme(dracula)
    if(currentTheme === 'bespin')
    setTheme(bespin)
    if(currentTheme === 'xcodeDark')
    setTheme(xcodeDark)
    if(currentTheme === 'xcodeLight')
    setTheme(xcodeLight)
    if(currentTheme === 'okaidia')
    setTheme(okaidia)
  },[currentTheme])


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
      EditorState.changeFilter.of(()=>true)
    ]}
    onChange={(value)=> setCurrentCode(value)}
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
      />
      </CodeEditorContainer>
  )
}

export default CodeEditor