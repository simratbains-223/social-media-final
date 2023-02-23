import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{

  const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user")) || null
  );

   const login = () => {
    // to do
    setCurrentUser({id:1, name:"Simrat Bains", profilePic:"https://play-lh.googleusercontent.com/nDXdk5wKKYXgqyGYAOn-RlL71bFoIEI2PlVKfi1-7A3n5p89FqRGpVXjFWBbDKoP-A"
     });
   };



  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])



  return (
    <AuthContext.Provider value= {{currentUser, login}}>
        {children}
        </AuthContext.Provider>
  );




}