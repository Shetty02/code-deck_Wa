import { createContext, useState } from "react";

export const ModalContext = createContext();


export default function ModalProvider({children}){
    const initialModalFields = {
            show: false,
            modalType:"",
            identifiers:{
                folderId:"",
                cardId:"",
            }
    }
    const [isOpenModal,setIsOpenModal] = useState({...initialModalFields});
    const openModal = (value)=>{
        setIsOpenModal(value);
    }
    const closeModal = () => {
        setIsOpenModal({...initialModalFields});
    }

    const ModalFeatues = {
        isOpenModal:isOpenModal,
        openModal:openModal,
        closeModal:closeModal
    }
    // const setModal = (isOpenModal, type) =>{
    //     setIsOpenModal(isOpenModal);
    //     setModalType(type);
    // }
    // const isOpenModal = true;
    return(
        <ModalContext.Provider value={ModalFeatues}>
            {children}
        </ModalContext.Provider>
    )
}

// export default ModalProvider;