import React, { useContext } from 'react'
import styled  from 'styled-components'
import Modal from '../../components/Modal'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import { ModalContext } from '../../context/ModalContext'
const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`
function Home() {
  // const[isOpenModal, setIsOpenModal] = useState(true);
  // const isOpenModal = false;
  // const isOpenModal = true;
  const {isOpenModal} = useContext(ModalContext);
  // console.log(isOpenModal)
  return (
    // <div>Home</div>
    <StyledHome>
      {/* <h1>Home</h1> */}
      <LeftComponent />
      <RightComponent />
      {isOpenModal && <Modal/>}
    </StyledHome>
  )
}

export default Home