import { createContext, useState } from "react";

const IffcoDataContext = createContext();

const IffcoDataProvider = ({ children }) => {

    const [iffcoDealerData, setIffcoDealerData] = useState([]);
    return (
        <IffcoDataContext.Provider value={{iffcoDealerData,setIffcoDealerData}}>
            {children}
        </IffcoDataContext.Provider>
    )
}

export {IffcoDataContext ,IffcoDataProvider}
