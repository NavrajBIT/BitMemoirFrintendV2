import Form from "../subcomponents/form/form";
import Button from "../subcomponents/button/button";
import GoogleAuthentication from "./googleLogin";
import FacebookOAuth from "./facebookLogin";
const UserLogin = ({ useLogin }) => {
  return (
    <div
      style={{
        minHeight: "var(--min-height-screen)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        formTitle={"Log In"}
        formData={useLogin.loginformData}
        handleSubmit={useLogin.loginSubmit}
        formButton={"Log In"}
        status={useLogin.status}
        bgImage={true}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--padding-main)",
          }}
        >
          <div style={{ width: "70%" }}>
          <GoogleAuthentication label={"Log In"}/>
          <FacebookOAuth label={"Log In"}/>
          </div>
          Don&apos;t have an account?
          <div style={{ width: "40%" }}>
            <Button
              text={"Sign Up"}
              variant={"secondary"}
              onClick={() => {
                useLogin.setStatus("");
                useLogin.setSignUp(true);
              }}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserLogin;
