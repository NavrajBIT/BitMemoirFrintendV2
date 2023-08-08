"use client";
import { useEffect, useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function FacebookOAuth({label}) {
  const [profile, setProfile] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const authApI = async () => {
    await fetch('http://127.0.0.1:8000/user/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_token: accessToken,
        provider:"facebook"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Store the received OAuth2.0 token in local storage or as needed
        console.log(data);
      })
      .catch((error) => {
        console.error('Error while requesting OAuth2.0 token:', error);
      });
  }

  useEffect(() => {
    if (accessToken) {
      authApI();
    }
    // console.log(accessToken);
  }, [accessToken]);

  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="234093165719884"
          onResolve={(response) => {
            console.log(response);
            setAccessToken(response.data.accessToken);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        "Logged in"
      )}

      
    </div>
  );
}

export default FacebookOAuth;