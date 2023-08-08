"use client";
import { useEffect, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import uselogin from "./uselogin";

function FacebookOAuth({label}) {
  const [accessToken, setAccessToken] = useState(null);


  useEffect(() => {
    if (accessToken) {
      loginscript.authApI(accessToken,label,"facebook");
    }
    // console.log(accessToken);
  }, [accessToken]);

  return (
    <div>
  
        <LoginSocialFacebook
          appId="234093165719884"
          onResolve={(response) => {
            console.log(response);
            setAccessToken(response.data.accessToken);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

      
    </div>
  );
}

export default FacebookOAuth;