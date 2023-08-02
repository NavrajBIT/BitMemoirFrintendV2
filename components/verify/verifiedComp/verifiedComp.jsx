import Button from '@/components/subcomponents/button/button'
import './verifiedComp.css'

const containerStyle = {
    // border: '2px solid red',
    background: '#0F303E',
    height: '10rem',
    maxWidth: '35rem',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap:'10px',
    padding:'1rem',
    borderRadius: '8px',
    position: 'relative',
}

const VerifiedComp = () => {
    return (
        <div style={{
            // border:'2px solid red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin:'2rem 0'
        }}>
            <div style={containerStyle} className="container" id="firstContainer">
                <h1 style={{
                    color: 'var(--primary-light)',
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} 
                >Verified</h1>
                <div>
                    <img src="/verify/icon.png" alt="" id="icon" style={{
                        height: '6rem',
                    }} />
                </div>
                <div className='containerDiv'>
                    <span>Token ID : </span>
                    <span style={{ color: 'var(--primary-light)' }}>70</span>
                    <div className='info'>Contract Address:</div>
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
            <div style={containerStyle} className="container" id="secContainer">
                <div className='containerDiv'>
                    <div>Issued by:</div>
                    <div style={{ color: 'var(--primary-light)' }}>Beyond Imagination Technologies</div>
                    <div className='info'>BIT official developer ID</div>
                    <div style={{ color: 'var(--primary-light)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                    <div className='info'>Recipient Address:</div>
                    <div style={{ color: 'var(--primary-light)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                </div>
                <Button buttonText="Download"/>
            </div>
        </div>
    )
}

export default VerifiedComp;