import CertificateCard from './certificateCard';
import './profile.css';

const containerStyle = {
    // border:'2px solid red',
    background: '#0F303E',
    maxWidth: '65rem',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    position: 'relative',
}

const containerOneStyle={
    ...containerStyle,
    flexDirection: 'row',
    padding:'2rem 0'
}
const containerTwoStyle={
    ...containerStyle,
    flexDirection: 'column',
    padding:'3rem 0'
}

const Profile = () => {
    return (
        <>
            <div style={{
                // height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={containerOneStyle} id="formContainer">
                    <img src="/profile/profileIcon.png" alt="" style={{ height: '5rem' }} id="profileIcon" />
                    <div>
                        <h3 id="name">Ankit Bajpai</h3>
                        <span id="status">KYC Pending<sup>*</sup></span>
                        <div id="walletId">0xd8736941B07e9909a1cf355D6069843D4Ee2C1a5</div>
                        <img src="/profile/dots.png" alt="" id="dotIcon" />
                    </div>
                </div>

                <div style={containerTwoStyle} id="formContainer">
                    <h1 style={{
                        color: 'var(--primary-light)',
                        position: 'absolute',
                        top: '-1rem',
                        left: '3rem',
                    }} className="formHead"
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
                            Array.from({ length: 6 }).map(() => {
                                return (
                                    <CertificateCard />
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