import { createContext, useState } from "react";

export const ModalContext = createContext();


export default function ModalProvider({children}){
    const [isOpenModal,setIsOpenModal] = useState(false);
    const[modalType, setModalType] = useState(null);
    const setModal = (isOpenModal, type) =>{
        setIsOpenModal(isOpenModal);
        setModalType(type);
    }
    // const isOpenModal = true;
    return(
        <ModalContext.Provider value={{isOpenModal,setIsOpenModal,setModal,modalType}}>
            {children}
        </ModalContext.Provider>
    )
}

// export default ModalProvider;