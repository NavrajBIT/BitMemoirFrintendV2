import Input from "../subcomponents/form/input"
import Button from "../subcomponents/button2/button";
import  styles from './loyaltyNFT.module.css';

const LoyaltyNFT = () => {
    return (
        <div style={{
            // height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                // border:'2px solid red',
                background: '#0F303E',
                height: '50rem',
                maxWidth: '35rem',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                position: 'relative'
            }} id={styles.formContainer}>
                <h1 style={{
                    color: 'var(--primary-light)',
                    position: 'absolute',
                    top: '-1rem',
                    left: '3rem',
                }} className={styles.formHead}
                >Loyalty NFT</h1>
                <div style={{
                    // border: '1px dashed var(--primary-light)',
                    height: '20rem',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '1.5rem'
                }} id="uploadImgDiv">
                    <img src="/souvenirs/uploadImg.png" alt="" style={{ margin: '2rem 0' }} />
                    <label htmlFor="img" style={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }} id="uploadCertLabel">
                        Click to upload certificate
                        <input type="file" id="img" name="img" accept="image/*" style={{ display: 'none' }} />
                    </label>
                    <div style={{ margin: '8px 0' }} className={styles.drag}>OR</div>
                    <div className={styles.drag}>Drag and drop image to upload</div>
                </div>
                <Input placeholder="Wallet Address" />
                <Input placeholder="Email Address" />
                <label htmlFor="" style={{
                    fontSize: '12px',
                    textAlign: 'start',
                    margin: '1.5rem 0 0',
                    color: '#99ABAF'
                }}>Membership</label>
                <select id={styles.select}>
                    <option value="volvo">Regular</option>
                    <option value="volvo">Premium</option>
                </select>
                <Input placeholder="Reward" />
                <Button buttonText="Publish" />
            </div>
        </div>
    )
}

export default LoyaltyNFT;