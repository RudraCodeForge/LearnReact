import {createContext, useContext,useState} from "react";
const SelectContext = createContext();
export const SelectContextProvider = ({children}) =>{
    const [select, setSelect] = useState("Home");
    return(
      <SelectContext.Provider value={{select,setSelect}}>
        {children}
      </SelectContext.Provider>
    )
}
export const useSelectContext = () => useContext(SelectContext)