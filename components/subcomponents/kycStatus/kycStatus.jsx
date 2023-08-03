"use client"
import { useRouter } from "next/navigation";
import TextScroller from "../textScroller";
const KycStatus = ({setIsVerified}) => {

    const router = useRouter();

    const btnClicked=()=>{
        console.log('btn click');
        setIsVerified(true)
    }
    return (
        <>
           
            <div style={{
                width:"100%",
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                 <TextScroller text="For Accessing this Page Please Click on the Button Below (Site Under Devlopment)" />
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
                    <h3>Please Complete Your KYC</h3>
                    <button style={{
                        background: 'var(--primary-60)',
                        color: 'white',
                        padding: '1rem',
                        width: '25%',
                        borderRadius: '4px',
                        marginTop: '1rem',
                        // margin: "2rem",
                        cursor: 'pointer',
                    }}
                    //navigate to KYc page
                    onClick={
                        () => {
                            router.push("/kyc");
                        }
                    }
                    >
                        Start Your KYC
                    </button>
                </div>
            </div>
        </>
    )
}

export default KycStatus