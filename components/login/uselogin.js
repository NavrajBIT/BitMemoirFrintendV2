"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../subcomponents/scripts/apiCall";

const uselogin = () => {
  const api = API();
  const router = useRouter();
  const [signUp, setSignUp] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signupformData = [
    {
      type: "text",
      label: "Username",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      required: true,
    },
    {
      type: "password",
      label: "Confirm Password",
      required: true,
    },
  ];

  const loginformData = [
    {
      type: "text",
      label: "Username",
      required: true,
    },

    {
      type: "password",
      label: "Password",
      required: true,
    },
  ];

  const personalDetailsData=[
    {
      type: "text",
      label: "First Name",
      required: true,
    },
    {
      type: "text",
      label: "Last Name",
      required: true,
    },
    {
      type: "text",
      label: "Email",
      required: true,
    },
    {
      type: "text",
      label: "Phone Number",
      required: true,
    },
    {
      type: "text",
      label: "Organization",
      required: true,
    },
    {
      type: "text",
      label: "Job Title",
      required: true,
    },
    {
      type: "text",
      label: "Country",
      required: true,
    },
  ];

  const loginSubmit = async (data) => {
    setStatus("");
    setIsLoading(true);
    await api
      .getToken({
        username: data.Username,
        password: data.Password,
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          setStatus(res.error);
        } else {
          localStorage.setItem("jwtToken", res.access);




          // router.back();
          // if (typeof window !== 'undefined') {
          //   window.location.reload(true);
          // }
        }
      })
      .catch((err) => {
        setStatus("Something went wrong. Please try again.");
      });
    setIsLoading(false);
  };

  const signupSubmit = async (data) => {
    setStatus("");
    setIsLoading(true);
    if (data["Password"] !== data["Confirm Password"]) {
      setStatus("Error: Passwords don't match.");
      setIsLoading(false);
      return;
    }
    await api
      .createUser({
        username: data.Username,
        password: data.Password,
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          setStatus(res.error);
        } else {
          // router.back();
          // if (typeof window !== 'undefined') {
          //   window.location.reload(true);
          // }
          router.push("/login/completeYourProfile");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("Something went wrong. Please try again.");
      });

    setIsLoading(false);
  };


  const handleCompleteYourProfile = async (data) => {
    setStatus("");
    setIsLoading(true);
    await api
      .completeYourProfile({
        user:2,
        first_name: data["First Name"],
        last_name: data["Last Name"],
        email: data["Email"],
        phone: data["Phone Number"],
        country_code: "+91",
        organization: data["Organization"],
        designation: data["Job Title"],
        country: data["Country"],
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          setStatus(res.error);
        } else {
          router.back();
          if (typeof window !== 'undefined') {
          // window.location.reload(true);
          }
        }
      })
      .catch((err) => {
        setStatus("Something went wrong. Please try again.");
        console.log(err);
      });
    setIsLoading(false);
  };




  const authApI = async (accessToken, label) => {
    await fetch('http://127.0.0.1:8000/user/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken,
        provider:"google-oauth2"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the received OAuth2.0 token in local storage or as needed
        console.log(data);
        if (label === "Sign Up") {
          localStorage.setItem("token", data.token);
          router.push("/login/completeYourProfile");
        }else{
          localStorage.setItem("token", data.token);
          api.getProfile().then((res) => {
            console.log(res);
            if (res.error) {
              setStatus(res.error);
            } else {
             console.log(res);
            }
          }).catch((err) => {
            setStatus("Something went wrong. Please try again.");
            console.log(err);
          })
        }
      })
      .catch((error) => {
        console.error('Error while requesting OAuth2.0 token:', error);
      });
  }


  return {
    signUp,
    setSignUp,
    status,
    setStatus,
    signupformData,
    loginformData,
    loginSubmit,
    signupSubmit,
    isLoading,
    setIsLoading,
    personalDetailsData,
    handleCompleteYourProfile,
    authApI
  };
};

export default uselogin;