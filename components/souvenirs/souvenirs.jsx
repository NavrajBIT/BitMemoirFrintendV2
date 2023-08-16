'use client'

import { useState } from "react";
import Input from "../subcomponents/form/input"
import Button from "../subcomponents/button2/button";
import styles from './souvenirs.module.css';

const Souvenirs = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

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
                maxWidth: '35rem',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap:'1.5rem',
                borderRadius: '8px',
                position: 'relative',
                padding:'3.5rem 0 1rem'
            }} id={styles.formContainer}>
                <h1 style={{
                    color: 'var(--primary-50)',
                    position: 'absolute',
                    top: '-1rem',
                    left: '3rem',
                }} className={styles.formHead}
                >Souvenirs</h1>
                <div style={{
                    height: '20rem',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '1.5rem'
                }} id={styles.uploadImgDiv}>
                    {uploadedImage ? (
                        <img src={uploadedImage} alt="" className={styles.uploadImg} />
                    ) : (
                        <img src="/souvenirs/uploadImg.png" alt="" className={styles.uploadImg}/>
                    )}
                    <label htmlFor="img" style={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }} id={styles.uploadCertLabel}>
                        Click to upload certificate
                        <input type="file" id="img" name="img" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload}/>
                    </label>
                    <div style={{ margin: '8px 0' }} className={styles.drag}>OR</div>
                    <div className={styles.drag}>Drag and drop image to upload</div>
                </div>

                <label htmlFor="" style={{
                    fontSize: '12px',
                    textAlign: 'start',
                    margin: '5px 0 -15px',
                    color: '#99ABAF'
                }}>Souvenirs Frame</label>
                <select id={styles.select}>
                    <option value="volvo">Regular</option>
                </select>

                <Input placeholder="Souvenirs Name" />
                <Input placeholder="Wallet Address"/>
                <Input placeholder="Email Address"/>
                <Button buttonText="Publish"/>
            </div>
        </div>
    )
}

export default Souvenirs;