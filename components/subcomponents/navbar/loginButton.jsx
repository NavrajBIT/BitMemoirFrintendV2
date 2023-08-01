"use client";

// import Button from "../button/button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  return (
    // <Button
    //   text="Login"
    //   variant="primary"
    //   endIcon="login"
    //   onClick={() => router.push("login")}
    // />
    <button>Login</button>
  );
};

export default LoginButton;
