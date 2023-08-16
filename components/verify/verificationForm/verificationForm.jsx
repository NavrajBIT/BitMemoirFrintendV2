"use client"
import TextScroller from '@/components/subcomponents/textScroller';
import Form from '@/components/subcomponents/form/form';
import { useState } from 'react';

const VerificationForm = ({ setIsVerified }) => {
    const [status, setStatus] = useState('');
    const verifyDataForm = [
        {
            type: "text",
            label: "Contract Address",
            required: true,
        },
        {
            type: "text",
            label: "Token ID",
            required: true,
        },
    ];
    const btnClicked = () => {
        console.log('btn click');
        setIsVerified(true)
    }

    return (
        <>
            <TextScroller text="For Accessing this Page Please Click on the Button Below (Site Under Development)" />
            <div style={{
                height: '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Form
                    formTitle={"Verify Certificate"}
                    formData={verifyDataForm}
                    handleSubmit={btnClicked}
                    formButton={"Verify"}
                    status={status}
                    bgImage={false}
                />

            </div>
        </>
    )
}

export default VerificationForm;