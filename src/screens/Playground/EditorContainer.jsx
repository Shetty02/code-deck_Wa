import React from 'react'
import CodeEditor from './CodeEditor'

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