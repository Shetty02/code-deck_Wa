import React from 'react'
import { Header,TextArea,Console } from './InputConsole'


function OutputConsole({currentOutput}) {
  return (
    <Console>
    <Header>Output:</Header>
    <TextArea
    value = {currentOutput}
    // disabled
    />
    </Console>
  )
}

export default OutputConsole