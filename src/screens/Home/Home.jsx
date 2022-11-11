import React from 'react'
import styled  from 'styled-components'
import LeftComponent from './LeftComponent'
// import RightComponent from './RightComponent'


const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`
function Home() {
  return (
    // <div>Home</div>
    <StyledHome>
      {/* <h1>Home</h1> */}
      <LeftComponent/>
      {/* <RightComponent/> */}
    </StyledHome>
  )
}

export default Home