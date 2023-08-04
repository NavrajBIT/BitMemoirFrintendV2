"use client";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const GoogleAuthentication = () => {
 

  return (
    <>
      <GoogleOAuthProvider clientId="804423343303-6umuo0t8g73cbr68m867qvm8q87hjs3d.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={credentialResponse => {
            console.log(credentialResponse);
            console.log(jwt_decode(credentialResponse.credential));
        }}
        onError={() => {
            console.log('Login Failed');
        }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleAuthentication;
