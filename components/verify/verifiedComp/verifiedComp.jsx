import Button from '@/components/subcomponents/button/button'
import styles from './verifiedComp.module.css'

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
            <div style={containerStyle} className={styles.container} id={styles.firstContainer}>
                <h1 style={{
                    color: 'var(--primary-light)',
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }} 
                >Verified</h1>
                <div>
                    <img src="/verify/icon.png" alt="" id={styles.icon} style={{
                        height: '6rem',
                    }} />
                </div>
                <div className={styles.containerDiv}>
                    <span className={styles.text}>Token ID : </span>
                    <span className={styles.text} style={{ color: 'var(--primary-50)' }}>70</span>
                    <div className={`${styles.info} ${styles.text}`}>Contract Address:</div>
                    <div className={styles.text} style={{ color: 'var(--primary-50)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
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
            <div style={containerStyle} className={styles.container} id={styles.secContainer}>
                <div className={styles.containerDiv}>
                    <div className={`${styles.info} ${styles.text}`}>Issued by:</div>
                    <div className={styles.text} style={{ color: 'var(--primary-50)' }}>Beyond Imagination Technologies</div>
                    <div className={`${styles.info} ${styles.text}`}>BIT official developer ID</div>
                    <div className={styles.text} style={{ color: 'var(--primary-50)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                    <div className={`${styles.info} ${styles.text}`}>Recipient Address:</div>
                    <div className={styles.text} style={{ color: 'var(--primary-50)' }}>0x88f48ce4fcB67490256edbCd6C45C6Ee57E12d49</div>
                </div>
                <button style={{
                        background: 'var(--primary-50)',
                        color: 'white',
                        padding: '1rem',
                        width: '25%',
                        borderRadius: '4px',
                        marginTop: '0.5rem',
                        margin: "2rem",
                        cursor: 'pointer',
                    }} >
                        Download
                    </button>
            </div>
        </div>
    )
}

export default VerifiedComp;