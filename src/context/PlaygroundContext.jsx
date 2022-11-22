import { createContext , useState} from "react";

export const PlaygroundContext = createContext();

 const PlaygroundProvider = ({children}) =>{
    const [folders,setFolders] =useState({
      1:{
            title:"folder1",
            playgrounds:{
                1_1:{
                    title:"Playground1",
                    language:"javascript",
                },
                1_2:{
                    title:"Playground2",
                    language:"javascript",
                }
            }
        },
        "2":{
            title:"folder2",
            playgrounds:{
                '2_1':{
                    title:"Playground1",
                    language:"javascript",
                },
                '2_2':{
                    title:"Playground2",
                    language:"javascript",
                }
            }
        }
    })
   
    // 1) Deleteing the Folder
    const deleteFolder = (folderId)=>{
        setFolders(folders.filter((folder)=>{
            return folder.id !== folderId
        }))
    }

    // 2) Deleteing the cards inside the Folder
    const deletCards = (folderId, cardId) => {
        const newFolder = folders.map((folder)=>{
            if(folder.id === folderId){
                folder['playgrounds'] = folder['playgrounds'].filter((playground)=>
                playground.id !== cardId)
            }
            return folder;
        })
        setFolders(newFolder)
    }

    // 3) Adding the newFolder
    const addFolder = ()=>{
        console.log("ADD FOLDER");
    }
    // 4) Adding the newcard inside the Folder
    const addCard = (folderId)=>{
        console.log("ADD Card:",folderId);
    }
    // 5) Adding the newcard and newFolder 
    const addCardAndFolder = ()=>{
        console.log("Add Card And Folder");
    }
    // 6) Editing the Folder title
    const editFoldertitle = (folderId,folderName)=>{
        // console.log("Edit Folder title",folderId,folderName);
        setFolders({
            ...folders,
            [folderId]:{
                ...folders[folderId],
                title: folderName
            }
        })
    }
    // 7) Editing the Card title
    const editPlaygroundtitle = (folderId,cardId,cardName)=>{
        // console.log("Edit Card title",folderId,cardId,cardName);
        setFolders({
            ...folders,
            [folderId]:{
                ...folders[folderId],
                playgrounds:{
                    ...folders[folderId].playgrounds,
                    [cardId]:{
                        ...folders[folderId].playgrounds[cardId],
                        title:cardName
                    }
                }
            }
        })
    }
    

    const PlaygroundFeatures = {
        folders:folders,
        deleteFolder:deleteFolder,
        deletCards:deletCards,
        addCard:addCard,
        addFolder:addFolder,
        addCardAndFolder:addCardAndFolder,
        editPlaygroundtitle:editPlaygroundtitle,
        editFoldertitle:editFoldertitle
    }
    
    return(
        <PlaygroundContext.Provider value={PlaygroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;