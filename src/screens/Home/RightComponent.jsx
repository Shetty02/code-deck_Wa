import React from 'react'
import styled from 'styled-components'

const StyleRightComponent = styled.div`
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: blue;
`
function RightComponent() {
  return (
    <StyleRightComponent/>
  )
}

export default RightComponent