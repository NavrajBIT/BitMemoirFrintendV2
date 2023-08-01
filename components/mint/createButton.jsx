"use client";
// import Button from "../subcomponents/button/button";
import { useRouter } from "next/navigation";

const CreateButton = () => {
  const router = useRouter();
  return (
    <button>Button</button>
    // <Button
    //   text="Create New Template"
    //   // variant="primary"
    //   // endIcon="createCert"
    //   // onClick={() => router.push("certCreator")}
    // />
  );
};

export default CreateButton;
