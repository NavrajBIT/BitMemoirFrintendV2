"use client"
import { use, useEffect, useState } from "react";
import API from "../subcomponents/scripts/apiCall"
const useblog = () => {

    const api   = API();

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api.getBlogs()
        .then((res) => {
            setBlogs(res);
        }).
        catch((err) => {
            console.log(err);
        })
    }, [])


    return{
            blogs
        }
    
    
}

export default useblog;