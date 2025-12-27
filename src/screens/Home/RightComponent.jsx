import React,{useContext} from 'react'
import styled from 'styled-components'
import {IoTrashOutline} from 'react-icons/io5'
import {BiEditAlt} from 'react-icons/bi'
import logo from '../../assests/logo-small.png'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import { useNavigate } from 'react-router-dom'
const StyleRightComponent = styled.div`
    width: 60%;
    min-height: 100vh;
    background-color: var(--white);
    padding: 2rem 3rem;
    overflow-y: auto;
    
    @media (max-width: 768px) {
      width: 100%;
      padding: 1.5rem;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
`

const Heading = styled.h3`
    font-size: ${props => (props.size === "small" ? "1.25rem" : "1.75rem")};
    font-weight: 400;
    color: var(--text-main);
    margin: 0;
    
    span {
      font-weight: 700;
      color: var(--text-main);
    }
`

const AddFolder = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;

    span {
        font-size: 1.25rem;
        font-weight: 700;
    }

    &:hover {
        cursor: pointer;
        background-color: #eef2ff;
        color: var(--primary-hover);
    }
`

const FolderCard = styled.div`
      margin-bottom: 2rem;
`

const FolderIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--text-light);

    & > * {
         transition: color 0.2s;
         &:hover {
            color: var(--text-main);
            cursor: pointer;
         }
    }
`

const Logo = styled.img`
    width: 50px;
    margin-right: 1rem;
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    border-radius: 12px;
    background: var(--white);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--primary-color);
        cursor: pointer;
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    
    p:first-child {
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--text-main);
    }
    
    p:last-child {
        font-size: 0.875rem;
        color: var(--text-light);
    }
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

function RightComponent() {
  const navigate = useNavigate(); 
  const {openModal}  = useContext(ModalContext);
  const {folders,deleteFolder,deletCards} = useContext(PlaygroundContext);
  return (
    <StyleRightComponent>
      <Header>
        <Heading>
          My <span>PlayGround</span>
        </Heading>
        <AddFolder onClick={()=>openModal({
            show:true,
            modalType:1,
            identifiers:{
                folderId:folders.id,
                cardId:"",
            }
    })}>
          <span>+</span> New Folder
        </AddFolder>
      </Header>
      <hr /> 

        {
         Object.entries(folders).map(([folderId,folder])=>(
            <FolderCard key={folderId}>
        <Header>
          <Heading size="small">{folder.title}</Heading>
          <FolderIcon>
            <IoTrashOutline onClick={()=> deleteFolder(folderId)}/>
            {/* For deleting the folder */}
    <BiEditAlt onClick={()=> openModal({
            show:true,
            modalType:5,
            identifiers:{
                folderId:folderId,
                cardId:"",
            }
    })}/>
            <AddFolder onClick={()=>openModal({
            show:true,
            modalType:2,
            identifiers:{
                folderId:folderId,
                cardId:"",
            }
    })}>
              <span>+</span> New PlayGround
            </AddFolder>
          </FolderIcon>
        </Header>
            <PlayGroundCards>
              {
              Object.entries(folder['playgrounds']).map(([playgroundId,playground])=>(
            <Card key={playgroundId}
            onClick={()=>{
              navigate(`/playground/${folderId}/${playgroundId}`)
            }}
            >
              <CardContainer>
                <Logo src={logo} alt="" />
                <CardContent>
                  <p>{playground.title}</p>
                  <p>{playground.language}</p>
                </CardContent>
              </CardContainer>
                <FolderIcon
                //this will stop propagation of click from child to parent
                onClick={(e)=>{
                  e.stopPropagation();
                }}
                >
                  <IoTrashOutline onClick={()=>deletCards(folderId,playgroundId)}/> 
                  {/* For deleting the card */}
         <BiEditAlt onClick={()=> openModal({
            show:true,
            modalType:4,
            identifiers:{
                folderId:folderId,
                cardId:playgroundId,
            }
    })}/>
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