"use client"

import React, { useState } from 'react';
import VerificationForm from './verificationForm/verificationForm';
import VerifiedComp from './verifiedComp/verifiedComp';

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