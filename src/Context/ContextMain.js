// from main the props are exported 
// syntax differ between contextAPI and UseContaxt for using the prop otherwise the hierarcy will came in both case.

import React, { createContext } from 'react'
import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();



const ContextMain = ()=> {

  return(
    <>
      
      <FirstName.Provider value = {"neha"}>
      <LastName.Provider value={"prajapati"}>

        <ComA/>


      </LastName.Provider>

      </FirstName.Provider>
    </>


    );
};

export default ContextMain;
export {FirstName,LastName}