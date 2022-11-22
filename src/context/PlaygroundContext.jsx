import { createContext , useEffect, useState} from "react";
import { v4 as uuid } from 'uuid';

export const PlaygroundContext = createContext();

 const PlaygroundProvider = ({children}) =>{
    const initialItems ={
        [uuid()]:{
            title:"DSA",
            playgrounds:{
                [uuid()]:{
                    title:"Stack",
                    language:"java",
                },
                [uuid()]:{
                    title:"LinkedList",
                    language:"java",
                }
            }
        },
    }
    const [folders,setFolders] =useState(()=>{
        let localData = localStorage.getItem('playgrounds-data');
        if(localData === null || localData === undefined){
            return initialItems;
        }
        return JSON.parse(localData);
    })

    useEffect(()=>{
        localStorage.setItem('playgrounds-data',JSON.stringify(folders))
     },[folders])
   
    // 1) Deleteing the Folder
    const deleteFolder = (folderId)=>{
        // setFolders(folders.filter((folder)=>{
        //     return folder.id !== folderId
        // }))
        setFolders((oldState)=>{
            const newState = {...oldState};
            delete newState[folderId];
            return newState;
        })
    }

    // 2) Deleteing the cards inside the Folder
    const deletCards = (folderId, cardId) => {
        // const newFolder = folders.map((folder)=>{
        //     if(folder.id === folderId){
        //         folder['playgrounds'] = folder['playgrounds'].filter((playground)=>
        //         playground.id !== cardId)
        //     }
        //     return folder;
        // })
        setFolders((oldState)=>{
            const newState = {...oldState};
            delete newState[folderId].playgrounds[cardId];
            return newState;
        })
        // setFolders(newFolder)
    }

    // 3) Adding the newFolder
    const addFolder = (folderName)=>{
        // console.log("ADD FOLDER");
        // setFolders([
        //     ...folders,{
        //     [uuid()]:{
        //          title:folderName,
        //          playgrounds:{}
        //     }
        // }
        // ])
        setFolders((oldState)=>{
            const newState = {...oldState};
            newState[uuid()] ={
                title:folderName,
                playgrounds:{}
            }
            return newState;            
        })
    }
    // 4) Adding the newcard inside the Folder
    const addCard = (folderId,cardName,language)=>{
        // console.log("ADD Card:",folderId);
        // setFolders([
        //     ...folders,{
        //     [folderId]:{
        //         ...folders[folderId],
        //         playgrounds:{
        //             ...folders[folderId].playgrounds,
        //             [uuid()]:{
        //                 title:cardName,
        //                 language:language
        //             }
        //         }
        //     }
        // }
        // ])
     setFolders((oldState)=>{
            const newState = {...oldState};
            newState[folderId].playgrounds[uuid()]={
                title:cardName,
                language:language
            }
            return newState;
        })
    }
    // 5) Adding the newcard and newFolder 
    const addCardAndFolder = (folderName,cardName,language)=>{
        // console.log("Add Card And Folder");
        // setFolders([...folders,{
        //     [uuid()]:{
        //         title:folderName,
        //         playgrounds:{
        //             [uuid()]:{
        //                 title:cardName,
        //                 language:language
        //             }
        //         }
        //     }
        // }])

        setFolders((oldState)=>{
            const newState = {...oldState}
             newState[uuid()] = {
                title:folderName,
                playgrounds:{
                    [uuid()]:{
                        title:cardName,
                        language:language
                    }
                }
            }
            return newState;
        })
    
    }
    // 6) Editing the Folder title
    const editFoldertitle = (folderId,folderName)=>{
        // console.log("Edit Folder title",folderId,folderName);
        // setFolders({
        //     ...folders,
        //     [folderId]:{
        //         ...folders[folderId],
        //         title: folderName
        //     }
        // })
        setFolders((oldState)=>{
            const newState = {...oldState};

            newState[folderId].title = folderName
            
            return newState;
        })
    }
    // 7) Editing the Card title
    const editPlaygroundtitle = (folderId,cardId,cardName)=>{
        // console.log("Edit Card title",folderId,cardId,cardName);
        // setFolders({
        //     ...folders,
        //     [folderId]:{
        //         ...folders[folderId],
        //         playgrounds:{
        //             ...folders[folderId].playgrounds,
        //             [cardId]:{
        //                 ...folders[folderId].playgrounds[cardId],
        //                 title:cardName
        //             }
        //         }
        //     }
        // })
        setFolders((oldState)=>{
            const newState = {...oldState};

            newState[folderId].playgrounds[cardId].title = cardName;
            
            return newState;
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