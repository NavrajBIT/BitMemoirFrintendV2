import { useState } from "react";
// import GoogleLogin from "react-google-login";
// import GoogleLogout from "react-google-login";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const CLIENT_ID = "483206767755-c6urnj92eu57k16a90tvjlpqp598qf8g.apps.googleusercontent.com";
// const SCOPE = "https://www.googleapis.com/auth/drive";

const GoogleAuthentication = () => {
  // const [isSignedIn, setIsSignedIn] = useState(false);

  // const signOutHandler = () => {
  //   console.log("logged out!");
  //   setIsSignedIn(false);
  // };

  // const signInHandler = (response) => {
  //   console.log(response);
  //   setIsSignedIn(true);
  // };

  return (
    <>
      {/* {isSignedIn ? (
        <GoogleLogout clientId={CLIENT_ID} buttonText="Logout" onLogoutSuccess={signOutHandler} />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={signInHandler}
          onFailure={signInHandler}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        //   scope={SCOPE}
        />
      )} */}
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
