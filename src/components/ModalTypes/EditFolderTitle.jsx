import React,{useContext, useState} from 'react'
import {Header,CloseButton,Input} from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'

function EditFolderTitle() {
  const {closeModal,isOpenModal} = useContext(ModalContext)
  const {editFoldertitle,folders} = useContext(PlaygroundContext)
  const {folderId} = isOpenModal.identifiers.folderId;
  const [folderTitle,setFolderTitle] = useState(folders[folderId].title)

  // console.log(folderTitle)
  return (
    <>
      <Header>
        <h2>Edit Folder Title</h2>
        <CloseButton onClick={()=>closeModal()}>
        <IoCloseSharp/>
        </CloseButton>
      </Header>
      <Input>
          <input type="text" onChange={(e)=>setFolderTitle(e.target.value)}/>
          <button onClick={()=>{ 
            editFoldertitle(folderId,folderTitle)
            closeModal()
          }}>Update Title</button>
      </Input>
      </>
  )
}

export default EditFolderTitle