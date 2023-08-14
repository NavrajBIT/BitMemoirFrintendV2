"use client";

import { useState,useEffect } from "react";
import API from "../subcomponents/scripts/apiCall";

const useprofile = () => {

    const api = API();
    const [userDetails, setUserDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        wallet_address: "",
        phone_number: "",
        country: "",
        state: "",
    });
    

    useEffect(() => {
        api.getProfile().then((res) => {
            setUserDetails(res);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    return {
        userDetails
    }
    
}

export default useprofile;