"use client";

import Button from "../subcomponents/button/button";
import Form from "../subcomponents/form/form";
import uselogin from "./uselogin";




const SignUpForm = () => {

    const useLogin = uselogin();




return(
<div
      style={{
        minHeight: "var(--min-height-screen)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        formTitle={"Personal Details"}
        formData={useLogin.personalDetailsData}
        formButton="Submit"
        handleSubmit={useLogin.handleCompleteYourProfile}
        status={useLogin.status}
        isLoading={useLogin.isLoading}
        bgImage={true}
      >
        
      </Form>
    </div>
    )

}


export default SignUpForm;