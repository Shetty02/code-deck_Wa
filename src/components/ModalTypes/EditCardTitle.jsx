import React,{useContext, useState} from 'react'
import {Header,CloseButton, Input} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'


function EditCardTitle() {
  const {closeModal,isOpenModal} = useContext(ModalContext);
  const {editPlaygroundtitle,folders} = useContext(PlaygroundContext);  

  const {folderId, cardId} = isOpenModal.identifiers;

  const [cardTitle,setCardTitle] = useState(folders[folderId].playgrounds[cardId].title); 
  // console.log(cardTitle)

  return (
  <>
    <Header>
      <h2>Edit Card Title</h2>
      <CloseButton onClick={()=>closeModal()}>
      <IoCloseSharp/>
      </CloseButton>
    </Header>
    <Input>
        <input type="text" onChange={(e)=>setCardTitle(e.target.value)}/>
        <button onClick={()=>{
          editPlaygroundtitle(folderId,cardId,cardTitle);
          closeModal();
        }}>Update Title</button>
    </Input>
    </>
  )
}

export default EditCardTitle