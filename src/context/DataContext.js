'use client'

import { createContext, useEffect, useState } from "react";
import { getPosts } from "../utils/fetchPostData";

export const GetDataApiContext = createContext(); 

export default function GetDataApiProvider({children}){
    const [postList, setPostList] = useState([]); 

    useEffect(() => {
        async function fetchPosts() {
            try {
                const posts = await getPosts(); 
                setPostList(posts); 
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchPosts(); 
    },[])
    console.log(postList[0]);
    return(
        <GetDataApiContext.Provider value={{postList}}>
            {children}
        </GetDataApiContext.Provider>
    )
}

export { GetDataApiProvider }