"use client"

import { useState } from "react";
import Input from "../subcomponents/form/input"
import Button from "../subcomponents/button/button";
import './souvenirs.css';

const Souvenirs = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
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
                height: '50rem',
                maxWidth: '35rem',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                position: 'relative'
            }}>
                <h1 style={{
                    color: 'var(--primary-light)',
                    position: 'absolute',
                    top: '-1rem',
                    left: '3rem',
                }} className="formHead"
                >Souvenirs</h1>
                <div style={{
                    height: '20rem',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '1.5rem'
                }} id="uploadImgDiv">
                    {uploadedImage ? (
                        <img src={uploadedImage} alt="" style={{ margin: '2rem 0' }} />
                    ) : (
                        <img src="/souvenirs/uploadImg.png" alt="" style={{ margin: '2rem 0' }} />
                    )}
                    <label htmlFor="img" style={{
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }} id="uploadCertLabel">
                        Click to upload certificate
                        <input type="file" id="img" name="img" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
                    </label>
                    <div style={{ margin: '8px 0' }} className="drag">OR</div>
                    <div className="drag">Drag and drop image to upload</div>
                </div>

                <label htmlFor="" style={{
                    fontSize: '12px',
                    textAlign: 'start',
                    margin: '1.5rem 0 0',
                    color: '#99ABAF'
                }}>Souvenirs Frame</label>
                <select id="cars" name="cars">
                    <option value="volvo">Regular</option>
                </select>

                <Input placeholder="Souvenirs Name" />
                <Input placeholder="Wallet Address" />
                <Input placeholder="Email Address" />
                <Button buttonText="Publish" />
            </div>
        </div>
    )
}

export default Souvenirs