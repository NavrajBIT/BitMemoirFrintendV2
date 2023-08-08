"use client";
import CertificateCard from './certificateCard';
import MobileProfileButton from './mobileProfileButton';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../subcomponents/context/userContext';
import './profile.css';

const containerStyle = {
    // border:'2px solid red',
    background: '#0F303E',
    maxWidth: '65rem',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: '8px',
    position: 'relative',
}

const containerOneStyle = {
    ...containerStyle,
    flexDirection: 'row',
    padding: '2rem 0'
}
const containerTwoStyle = {
    ...containerStyle,
    flexDirection: 'column',
    padding: '3rem 0'
}

const Profile = () => {
    const [userDetails, setUserDetails] = useState({
        first_name: "",
        last_name: "",
        email: "",
        wallet_address: "",
        phone_number: "",
        country: "",
        state: "",

    });

    const populateUser = () => {
      const storedUserDetails = localStorage.getItem("userDetails");
      
      if (storedUserDetails) {
        const parsedUserDetails = JSON.parse(storedUserDetails);
        setUserDetails(parsedUserDetails);
        console.log(parsedUserDetails);
      }
    };
    
    useEffect(() => {
      populateUser();
    }, []);

    return (
        <>
            <div style={{
                // height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundImage: url('/about/about-bg.png')
                // backgroundImage: 'url("/about/about-bg.png")',
            }}>
                <div style={containerOneStyle} id="formContainer" className='profileContOne'>
                    <img src="/profile/profileIcon.png" alt="" style={{ height: '5rem' }} id="profileIcon" />
                    <div>
                        <h3 id="name">{userDetails.first_name+" "+ userDetails.last_name }</h3>
                        <span id="status">KYC Pending<sup>*</sup></span>
                        <div id="walletId">0xd8736941B07e9909a1cf355D6069843D4Ee2C1a5
                            <img src="/profile/copy2.png" alt="" id="copyIcon" />
                        </div>
                        <img src="/profile/dots.png" alt="" id="dotIcon" />

                        
                    </div>
                </div>

                <h2 id="mobileHistoryHead">History</h2>
                <MobileProfileButton />

                <div style={containerTwoStyle} id="formContainer">
                    <h1 style={{
                        color: 'var(--primary-light)',
                        position: 'absolute',
                        top: '-1rem',
                        left: '3rem',
                    }} className="historyHead"
                    >History</h1>


                    <div id="profileBtnDiv">
                        <button className='profileBtn'>Dynamic certificates</button>
                        <button className='profileBtn'>Static certificates</button>
                        <button className='profileBtn'>NFTs</button>
                        <button className='profileBtn'>Souvenirs</button>
                        <button className='profileBtn'>Loyalty Programs</button>
                    </div>
                    <div id="filterBtnParent">
                        <button className='filterBtn'>Sort</button>
                        <button className='filterBtn'>Filter</button>
                    </div>


                    <div id="certificatesCardContainer">
                        {
                            Array.from({ length: 8 }).map((index) => {
                                return (
                                    <CertificateCard key={index}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile