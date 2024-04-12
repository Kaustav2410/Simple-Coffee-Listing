import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [rawdata,setRawData] = useState([]);
    const [loading,setLoading] = useState(true);

    async function getProducts(){
        let url ='https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
       try{
            const res = await fetch(url)
            const  response = await res.json();
            setRawData(response);
            setLoading(false);
       }
        catch(error ) {
            console.log("Error in fetching the posts",error)
        }
    }
    const value = {
        rawdata:rawdata,
        setRawData:setRawData,
        getProducts:getProducts,
        loading:loading,
        setLoading:setLoading
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}