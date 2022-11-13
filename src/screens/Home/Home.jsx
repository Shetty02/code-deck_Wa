import React from 'react'
import styled  from 'styled-components'
import Modal from '../../components/Modal'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'


const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`
function Home() {
  const isOpenModal = false;
  // const isOpenModal = true;
  return (
    // <div>Home</div>
    <StyledHome>
      {/* <h1>Home</h1> */}
      <LeftComponent/>
      <RightComponent/>
      {isOpenModal && <Modal/>}
    </StyledHome>
  )
}

export default Home