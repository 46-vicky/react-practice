import React, { useState } from 'react';
import { createContext } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {
    
    const [userDetail,setUserDetail] = useState({firstName:"ilangkumaran",lastName:"vignesh"});

  return (
    <LoginContext.Provider value={{userDetail}}>
        {children}
    </LoginContext.Provider>
        
  )
}

export default LoginContextProvider