import React, { useContext } from 'react'
import styled  from 'styled-components'
import Modal from '../../components/Modal'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import { ModalContext } from '../../context/ModalContext'
const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: var(--light-bg);
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
      {isOpenModal.show && <Modal/>}
    </StyledHome>
  )
}

export default Home