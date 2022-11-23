import React, { useContext } from 'react'
import EditorContainer from './EditorContainer'
// import InputConsole from './InputConsole'
// import OutputConsole from './OutputConsole'
// import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import {PlaygroundContext} from '../../context/PlaygroundContext'

function Playground() {
  const {folderId, playgroundId} = useParams();

  const {folders} = useContext(PlaygroundContext);
  const title = folders[folderId]['playgrounds'][playgroundId]['title'];
  return (
    <div>
      {title}
      <EditorContainer/>
      </div>
  )
}

export default Playground