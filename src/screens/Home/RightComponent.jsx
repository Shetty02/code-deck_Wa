import React,{useContext} from 'react'
import styled from 'styled-components'
import {IoTrashOutline} from 'react-icons/io5'
import {BiEditAlt} from 'react-icons/bi'
import logo from '../../assests/logo-small.png'
import { ModalContext } from '../../context/ModalContext'
const StyleRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100vh;
    background-color: #ffff;
    padding: 2rem;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:.8rem;
`
const Heading = styled.h3`
    font-size: ${props=>(props.size ==="small" ? "1.25rem" : "1.75rem")};
    font-weight: 400;

    span{
      font-weight: 700;
    }
`
const AddFolder = styled.div`
font-size: 1.25rem;
display: flex;
align-items: center;
gap: 0.25rem;
color: black;
span{
    font-size: 1.5rem;
    font-weight: 700;
}
&:hover{
    cursor: pointer;
}
`
const FolderCard = styled.div`
      margin-bottom: 1rem;
`
const FolderIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;

    &:hover{
      cursor: pointer;
    }
`
const Logo = styled.img`
    width: 70px;
    margin-right:1rem;
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    /* grid-row-gap: 1rem; */
`
const Card =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 0 0 4px 0 #989898;
`

const CardContent = styled.div`

`
const CardContainer = styled.div`
  display: flex;
  align-items: center;;
`

function RightComponent() {
  const {setModal}  = useContext(ModalContext);
  return (
    <StyleRightComponent>
      <Header>
        <Heading>
          My <span>PlayGround</span>
        </Heading>
        <AddFolder onClick={()=>setModal(true, 1)}>
          <span>+</span> New Folder
        </AddFolder>
      </Header>
      <hr />

        {
          Array.from({length:4}).map(()=>(
            <FolderCard>
        <Header>
          <Heading size="small">Folder Name</Heading>
          <FolderIcon>
            <IoTrashOutline />
            <BiEditAlt onClick={()=> setModal(true, 5)}/>
            <AddFolder onClick={()=>setModal(true, 2)}>
              <span>+</span> New PlayGround
            </AddFolder>
          </FolderIcon>
        </Header>
            <PlayGroundCards>
              {
                Array.from({length:4}).map(()=>(
            <Card>
              <CardContainer>
                <Logo src={logo} alt="" />
                <CardContent>
                  <p>PlayGround Name</p>
                  <p>Language: C++</p>
                </CardContent>
              </CardContainer>
                <FolderIcon>
                  <IoTrashOutline />
                  <BiEditAlt onClick={()=> setModal(true, 4)}/>
                </FolderIcon>
            </Card>
                ))
              }
          </PlayGroundCards>
        
      </FolderCard>
          ))
        }

      
    </StyleRightComponent>
  );
}

export default RightComponent