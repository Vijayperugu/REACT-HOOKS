import React,{createContext,useState} from "react";

import UserrContext from "./components/UserrContext";
export const usercomponents=createContext();
function App() {
  const [theme,setthem]= useState('light');
  return (
    <>
    <usercomponents.Provider value={{theme,setthem}}>
    <div  style={
    { background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff', 
      height: '100vh' }
    }>
      Welcome
      <UserrContext/>

    </div>
      

    </usercomponents.Provider>
      
    </>
  );
}

export default App;
