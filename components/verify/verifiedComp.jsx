import React from 'react'
import Button from '../subcomponents/button/button'
import './verifiedComp.css'

const containerStyle = {
    // border: '2px solid red',
    background: '#0F303E',
    height: '10rem',
    // width: '35%',
    maxWidth: '35rem',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '8px',
    position: 'relative',
    // padding: '3rem'
}

const VerifiedComp = () => {
    return (
        <div style={{
            // border:'2px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={containerStyle}>
                <h1 style={{
                    color: 'var(--primary-light)',
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} className="formHead"
                >Verified</h1>
                <div>
                    <img src="/verify/icon.png" alt="" style={{
                        height: '6rem',
                    }} />
                </div>
                <div>
                    <span>Token ID : </span>
                    <span style={{ color: 'var(--primary-light)' }}>70</span>
                    <div>Contract Address:</div>
                    <div style={{ color: 'var(--primary-light)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                </div>
            </div>
            <div style={{
                height: '20rem',
                maxWidth: '35rem',
                width: '90%',
                margin: '1rem 0'
            }}>
                <img src="/verify/certificate.png" alt="" style={{ height: '100%', width: '100%' }} />
            </div>
            <div style={containerStyle}>
                <div>
                    <div>Issued by:</div>
                    <div style={{ color: 'var(--primary-light)' }}>Beyond Imagination Technologies</div>
                    <div>BIT official developer ID</div>
                    <div style={{ color: 'var(--primary-light)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                    <div>Recipient Address:</div>
                    <div style={{ color: 'var(--primary-light)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                </div>
                <Button buttonText="Download" />
            </div>
        </div>
    )
}

export default VerifiedComp