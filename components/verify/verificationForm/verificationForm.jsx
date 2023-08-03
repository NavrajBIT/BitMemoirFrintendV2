"use client"

import Input from '@/components/subcomponents/form/input';
import Button from '@/components/subcomponents/button/button';
import './verificationForm.css';
import TextScroller from '@/components/subcomponents/textScroller';
const VerificationForm = ({setIsVerified}) => {

    const btnClicked=()=>{
        console.log('btn click');
        setIsVerified(true)
    }
    return (
        <>
            <TextScroller text="For Accessing this Page Please Click on the Button Below (Site Under Development)" />
            <div style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                
                <div style={{
                    // border:'2px solid red',
                    background: '#0F303E',
                    height: '20rem',
                    maxWidth: '35rem',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    position: 'relative'
                }} id="formContainer">
                    <h1 style={{
                        color: 'var(--primary-light)',
                        position: 'absolute',
                        top: '-1rem',
                        left: '3rem',
                    }} className="formHead"
                    >Verify Certificate</h1>
                    <Input placeholder="Contract Address"/>
                    <Input placeholder="Token ID"/>
                    <button style={{
                        background: 'var(--primary-50)',
                        color: 'white',
                        padding: '1rem',
                        width: '25%',
                        borderRadius: '4px',
                        marginTop: '1rem',
                        // margin: "2rem",
                        cursor: 'pointer',
                    }} onClick={btnClicked}>
                        Verify
                    </button>
                </div>
            </div>
        </>
    )
}

export default VerificationForm;