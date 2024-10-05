// import { createContext, useContext, useEffect, useState } from "react"; 
// import { getUser } from "../helper-functions/functions";

// export const UserContext = createContext();



// export default function AuthProvider({children}) {
//     const userValue = getUser();
//     return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
// }

// export async function useAuth(){
//     const context = await useContext(UserContext);
//     console.log(context);
//     if(context === undefined){
//         throw new Error("useAuth must be used within authProvider");
//     }
//     return  context;
// }


