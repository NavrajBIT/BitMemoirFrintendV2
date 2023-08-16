'use client'

import { useState } from "react";
import Input from "../subcomponents/form/input"
import Button from "../subcomponents/button2/button";
import styles from './loyaltyNFT.module.css';

const LoyaltyNFT = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [rewardVal, setRewardVal] = useState(10);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        // console.log(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const incrementReward = () => (rewardVal < 100) && setRewardVal(rewardVal + 5);

    const decrementReward = () => (rewardVal > 5) && setRewardVal(rewardVal - 5);

    return (
        <div style={{
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
                gap:'1.5rem',
                borderRadius: '8px',
                position: 'relative',
                padding: '2rem 0'
            }} id={styles.formContainer}>
                <h1 style={{
                    color: 'var(--primary-50)',
                    position: 'absolute',
                    top: '-1rem',
                    left: '3rem',
                }} className={styles.formHead}
                >Loyalty NFT</h1>
                <div style={{
                    height: '20rem',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                    margin: '2rem 0'
                }} id={styles.uploadImgDiv}>
                    {uploadedImage ? (
                        <img src={uploadedImage} alt="" className={styles.uploadImg} />
                    ) : (
                        <img src="/souvenirs/uploadImg.png" alt="" className={styles.uploadImg} />
                    )}
                    <label htmlFor="img" style={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }} id={styles.uploadCertLabel}>
                        Click to upload certificate
                        <input type="file" id="img" name="img" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
                    </label>
                    <div style={{ margin: '8px 0' }} className={styles.drag}>OR</div>
                    <div className={styles.drag}>Drag and drop image to upload</div>
                </div>
                <Input placeholder="Wallet Address" />
                <Input placeholder="Email Address" />
                <div className={styles.halfInput}>
                    <div className={styles.membershipDiv}>
                        <label className={styles.label}>Membership</label>
                        <select id={styles.membership}>
                            <option className={styles.selectOptions}>Regular</option>
                            <option className={styles.selectOptions}>Premium</option>
                        </select>
                    </div>
                    <div className={styles.rewardDiv}>
                        <label className={styles.label}>Reward</label>
                        <input type="" value={`${rewardVal}%`} id={styles.reward} />
                        <span id={styles.rewardIcons}>
                            <img src="/nft/plus.png" alt="" id={styles.plusIcon} onClick={incrementReward} />
                            <img src="/nft/minus.png" alt="" id={styles.minusIcon} onClick={decrementReward} />
                        </span>
                    </div>

                </div>
                <Button buttonText="Publish" />
            </div>
        </div>
    )
}

export default LoyaltyNFT;