"use client"
import { style } from '@mui/system';
import CertificateCard from './certificateCard';
import MobileProfileButton from './mobileProfileButton';
import styles from './profile.module.css';
import { useEffect, useState } from 'react';
import useprofile from './useprofile';

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

    const { userDetails } = useprofile();
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
                <div style={containerOneStyle} id={styles.formContainer} className={styles.profileContOne}>
                    <img src="/profile/profileIcon.png" alt="" style={{ height: '5rem' }} id={styles.profileIcon} />
                    <div>
                        <h3 id={styles.name}>{userDetails.first_name+" "+ userDetails.last_name }</h3>
                        <span id={styles.status}>KYC Pending<sup>*</sup></span>
                        <div id={styles.walletId}>0xd8736941B07e9909a1cf355D6069843D4Ee2C1a5
                            <img src="/profile/copy2.png" alt="" id={styles.copyIcon} />
                        </div>
                        <img src="/profile/dots.png" alt="" id={styles.dotIcon} />
                    </div>
                </div>

                <h2 id={styles.mobileHistoryHead}>History</h2>
                <MobileProfileButton />

                <div style={containerTwoStyle} id={styles.formContainer}>
                    <h1 style={{
                        color: 'var(--primary-light)',
                        position: 'absolute',
                        top: '-1rem',
                        left: '3rem',
                    }} className={styles.historyHead}
                    >History</h1>


                    <div id={styles.profileBtnDiv}>
                        <button className={styles.profileBtn}>Dynamic certificates</button>
                        <button className={styles.profileBtn}>Static certificates</button>
                        <button className={styles.profileBtn}>NFTs</button>
                        <button className={styles.profileBtn}>Souvenirs</button>
                        <button className={styles.profileBtn}>Loyalty Programs</button>
                    </div>
                    <div id={styles.filterBtnParent}>
                        <button className={styles.filterBtn}>Sort</button>
                        <button className={styles.filterBtn}>Filter</button>
                    </div>


                    <div id={styles.certificatesCardContainer}>
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