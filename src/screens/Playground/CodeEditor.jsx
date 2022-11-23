import CodeMirror from '@uiw/react-codemirror'
import React, { useState } from 'react'

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
import Select from 'react-select'
function CodeEditor() {
    const[theme,setTheme] = useState(githubDark);
    const[language,setLanguage] = useState(javascript);
    const[code,setCode] = useState(`console.log('hello world!');`)

    const themeOptions =[
      {value:githubDark, label:'githubDark'},
      {value:githubLight, label:'githubLight'},
      {value:'duotoneDark', label:'duotoneDark'},
      {value:'duotoneLight', label:'duotoneLight'},
      {value:'dracula', label:'dracula'},
      {value:'bespin', label:'bespin'},
      {value:'xcodeDark', label:'xcodeDark'},
      {value:'xcodeLight', label:'xcodeLight'},
      {value:'okaidia ', label:'okaidia '},
    ]
    
    const languageOptions = [
      {value:'cpp', label:'cpp'},
      {value:'java', label:'java'},
      {value:'javascript', label:'javascript'},
      {value:'phyton', label:'phyton'},

    ]

    const handleThemeChange = (selectedOptions)=>{
      setTheme(selectedOptions);
    }
    const handleLanguageChange = (selectedOptions)=>{
      setLanguage(selectedOptions);
    }
  return (
    <div>
      <Select
      value={theme.label}
      options={themeOptions}
      onChange={handleThemeChange}
      />
      <Select
      value={'language'}
      options={languageOptions}
      onChange={handleLanguageChange}
      />
    <CodeMirror
    value={code}
    height="100%"
    theme={theme}
    // extensions={[java({ jsx:  true })]}
    extensions={[
      language,
      indentUnit.of("        "),  
      EditorState.tabSize.of(8),
      EditorState.changeFilter.of(()=>true)
    ]}
    onChange={(value)=> setCode(value)}
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
      </div>
  )
}

export default CodeEditor