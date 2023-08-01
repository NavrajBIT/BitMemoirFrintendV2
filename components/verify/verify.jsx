"use client"

import React, { useState } from 'react';
// import { client } from 'next/client';
import VerificationForm from "./verificationForm"
import VerifiedComp from "./verifiedComp"

const Verify = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    (isVerified ?
      <VerifiedComp/>
      :
      <VerificationForm setIsVerified={setIsVerified}/>
    )
  );
}

export default Verify