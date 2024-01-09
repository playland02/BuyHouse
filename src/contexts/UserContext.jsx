
import { createContext,useState } from "react";

//criamos o context
export const  UserContext = createContext()

//criamos o provider

export function UserContextProvider({children}){
    const [user,setUser] = useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}



