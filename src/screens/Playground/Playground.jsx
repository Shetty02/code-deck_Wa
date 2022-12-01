import React, { useContext, useState } from 'react'
import EditorContainer from './EditorContainer'
import InputConsole from './InputConsole'
import OutputConsole from './OutputConsole'
import Navbar from './Navbar'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {LanguageMap, PlaygroundContext} from '../../context/PlaygroundContext'
import { ModalContext } from '../../context/ModalContext'
import Modal from '../../components/Modal'
import { Buffer } from 'buffer'
import axios from 'axios'


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
  const {isOpenModal, openModal, closeModal} = useContext(ModalContext);
  const{title, language, code} = folders[folderId].playgrounds[playgroundId];

  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentCode, setCurrentCode] = useState(code);
  const [currentInput, setCurrentInput] = useState('');
  const [currentOutput, setcurrentOutput] = useState('');

  

  // logics for savecode and runcode
  const saveCode = ()=> {
    savePlayground(folderId, playgroundId, currentCode, currentLanguage)
  }

  const encode = (str)=>{
      return Buffer.from(str,'binary').toString('base64');
  }
  const decode = (str)=>{
      return Buffer.from(str,'base64').toString();
  }

  const postSubmission = async (language_id, source_code, stdin) => {
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '084ebe380fmsh165de6ddc87dca7p196f72jsnb5c0da15154d',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: JSON.stringify({
              language_id: language_id,
              source_code: source_code,
              stdin: stdin 
      })
    };

    const res = await axios.request(options);
    return res.data.token 
  }

  const getoutput = async (token) => {
    const options = {
      method: 'GET',
      url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'X-RapidAPI-Key': '084ebe380fmsh165de6ddc87dca7p196f72jsnb5c0da15154d',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    };

        const res = await axios.request(options);
        // console.log(res);
        if(res.data.status_id <= 2){
          const res2 = await getoutput(token);
          return res2.data;
        }
        return res.data;
  }

  const runCode = async()=>{
    openModal({ 
      show:true,
      modalType:6,
      identifires:{
        folderId:"",
        cardId:"",
      }
    })
    // console.log("Running Code....")
    const language_id = LanguageMap[currentLanguage].id;
    const source_code = encode(currentCode);
    const stdin = encode(currentInput);

    // passong the thingd to post the submission
    const token = await postSubmission(language_id, source_code, stdin);

    // getting the output from token.
    // getoutput(token);
    const res = await getoutput(token);
    const status_name = res.status.description;
    const memory_taken = res.memory;
    const time_taken = res.time;
    const decoded_output = decode(res.stdout ? res.stdout : "");
    const decoded_compile_output = decode(res.compile_output ? res.compile_output : "");
    const decoded_error = decode(res.stderr ? res.stderr : "");

    let final_output = '';

    if(res.status_id !== 3){
      if(decoded_compile_output === ""){
        final_output = decoded_error;
      }
      else{
        final_output = decoded_compile_output;
      }
    }
    else{
      final_output = decoded_output;
    }

    setcurrentOutput(status_name + ". memory"+":"+memory_taken + " time"+":"+  time_taken + "\n\n" + final_output);
    // setcurrentOutput(status_name +  "\n\n" + final_output);
    closeModal();
  }

  const getFile = (e, setState) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0], setState);
    }
  };

  const placeFileContent = (file, setState) => {
    readFileContent(file)
      .then((content) => {
        setState(content)
      })
      .catch((error) => console.log(error));
  };

  function readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
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
      getFile = {getFile}
      />
      <Console>
        <InputConsole
        currentInput = {currentInput}
        setCurrentInput = {setCurrentInput}
        getFile={getFile}
        />
        <OutputConsole
        currentOutput = {currentOutput}
        />
      </Console>
      </MainContainer>
      {isOpenModal.show && <Modal/>}
      </div>
  )
}

export default Playground