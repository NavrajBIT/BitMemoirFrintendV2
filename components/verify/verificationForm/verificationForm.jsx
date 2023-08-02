"use client"

import Input from '@/components/subcomponents/form/input';
import Button from '@/components/subcomponents/button/button';
import './verificationForm.css';

const VerificationForm = ({setIsVerified}) => {

    const btnClicked=()=>{
        console.log('btn click');
        setIsVerified(true)
    }
    return (
        <>
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
                    <Button buttonText="Verify" btnClicked={btnClicked}/>
                </div>
            </div>
        </>
    )
}

export default VerificationForm;