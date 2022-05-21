import { createContext } from "react";


let nightMode= false;
const handleNightMode = () => !nightMode;
export const Context = createContext({nightMode,handleNightMode});