import React ,{useContext, useState} from 'react'
import {CloseButton, Header} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'
import Select from 'react-select'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

const InputWithSelect = styled.div `
        display: grid;
        grid-template-columns:0.5fr 1fr;
        row-gap: 1rem;
        column-gap: 1rem;
        margin-top:1.2rem;
        align-items: center;

        input{
        flex-grow: 1;
        height: 2rem;
        }

        button{
          background: #241f21;
          height: 2rem;
          color: white;
          padding: 0 2rem;
        }
`
function NewFolderandPlayground() {
  const languageOptions = [
    {value:"C++", label:"C++"},
    {value:"C", label:"C"},
    {value:"Java", label:"Java"},
    {value:"Phyton", label:"Phyton"},
    {value:"Javascript", label:"Javascript"},
  ];

  const {closeModal} = useContext(ModalContext);
  const {addCardAndFolder} = useContext(PlaygroundContext);
  
  const [language, setLanguage] = useState(languageOptions[0]);
  const[folderTitle,setFolderTitle] = useState("");
  const[cardTitle,setCardTitle] = useState("");

  const handleLanguageChange = (selectLanguage)=>{
        setLanguage(selectLanguage);
  }
  return ( 
  <>
   <Header>
      <h2>Create New Folder and Playground</h2>
      <CloseButton onClick={()=>closeModal()}>
      <IoCloseSharp/>
      </CloseButton>
    </Header>
    <InputWithSelect>
              <label>Enter Folder Name</label>
              <input type="text" onChange={(e)=>setFolderTitle(e.target.value) } />
              <label>Enter Card Name</label>
              <input
              type="text" 
              onChange={(e)=>setCardTitle(e.target.value)} 
              />
             <Select 
             value={language}
             options={languageOptions}
             onChange={handleLanguageChange}
             />
              <button
              onClick={()=>{
                addCardAndFolder(folderTitle,cardTitle,language.label);
                closeModal();
              }}
              >Create Playground</button>
    </InputWithSelect>
    </>
  )
}

export default NewFolderandPlayground