import React, { useContext, useState } from 'react'
import EditorContainer from './EditorContainer'
import InputConsole from './InputConsole'
import OutputConsole from './OutputConsole'
import Navbar from './Navbar'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {PlaygroundContext} from '../../context/PlaygroundContext'
import { ModalContext } from '../../context/ModalContext'
import Modal from '../../components/Modal'


const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: calc(100vh - 4.5rem);
`
const Console = styled.div`
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
`
function Playground() {
  const {folderId, playgroundId} = useParams();

  const {folders, savePlayground} = useContext(PlaygroundContext);
  const {isOpenModal} = useContext(ModalContext);
  const{title, language, code} = folders[folderId].playgrounds[playgroundId];

  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentCode, setCurrentCode] = useState(code);
  const [currentInput, setCurrentInput] = useState('');
  const [currentOuput, setCurrentOuput] = useState('');

  

  // logics for savecode and runcode
  const saveCode = ()=> {
    savePlayground(folderId, playgroundId, currentCode, currentLanguage)
  }
  const runCode = ()=>{
    // savePlayground(folderId, playgroundId, currentCode, currentLanguage)
    console.log("Running Code....")
  }

  return (
    <div>
      <Navbar/>
      <MainContainer>
      <EditorContainer
      title = {title}
      currentLanguage = {currentLanguage}
      setCurrentLanguage = {setCurrentLanguage}
      currentCode = {currentCode}
      setCurrentCode = {setCurrentCode}
      folderId = {folderId}
      playgroundId = {playgroundId}
      saveCode = {saveCode}
      runCode = {runCode}
      />
      <Console>
        <InputConsole
        currentInput = {currentInput}
        setCurrentInput = {setCurrentInput}
        />
        <OutputConsole
        currentOuput = {currentOuput}
        />
      </Console>
      </MainContainer>
      {isOpenModal.show && <Modal/>}
      </div>
  )
}

export default Playground