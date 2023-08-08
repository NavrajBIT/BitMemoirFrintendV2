"use client";

import { GoogleOAuthProvider, GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { GoogleLoginButton } from "react-social-login-buttons";
import { useRouter } from 'next/navigation';
import uselogin from "./uselogin";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleAuthentication = ({label}) => {

  const [accessToken, setAccessToken] = useState(null);
  const loginscript = uselogin();


  useEffect(() => {
    if (accessToken) {
      loginscript.authApI(accessToken,label);
    }
    // console.log(accessToken);
  }, [accessToken]);


  const login = useGoogleLogin({
    onSuccess: codeResponse => setAccessToken(codeResponse.access_token),

  });


  return (
    <>
      <GoogleOAuthProvider clientId="804423343303-6umuo0t8g73cbr68m867qvm8q87hjs3d.apps.googleusercontent.com">
        <GoogleLoginButton onClick={() => login()} />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleAuthentication;


