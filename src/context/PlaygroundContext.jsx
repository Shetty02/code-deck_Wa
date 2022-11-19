import { createContext , useState} from "react";

export const PlaygroundContext = createContext();

 const PlaygroundProvider = ({children}) =>{
    const [folders,setFolders] =useState([
        {
            name:"folder1",
            id:"1",
            playgrounds:[
                {
                    id:'1_1',
                    name:"Playground1",
                    language:"javascript",
                },
                {
                    id:'1_2',
                    name:"Playground2",
                    language:"javascript",
                }
            ]
        },
        {
            name:"folder2",
            id:"2",
            playgrounds:[
                {
                    id:'2_1',
                    name:"Playground1",
                    language:"javascript",
                },
                {
                    id:'2_2',
                    name:"Playground2",
                    language:"javascript",
                }
            ]
        }
    ])
   
    // 1) Deleteing the Folder
    const deleteFolder = (folderId)=>{
        setFolders(folders.filter((folder)=>{
            return folder.id !== folderId
        }))
    }

    // 1) Deleteing the cards inside the Folder
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
    return(
        <PlaygroundContext.Provider value={{folders,deleteFolder,deletCards}}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;