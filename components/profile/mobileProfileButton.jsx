import './profile.css'

const MobileProfileButton = () => {
    return (
        <div className='mobileProfileButton'>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '10px'
            }}>
                <select className='selectBtn'>
                    <option hidden>Certificate Type</option>
                    <option>Dynamic certificates</option>
                    <option>Static certificates</option>
                    <option>NFTs</option>
                    <option>Souvenirs</option>
                    <option>Loyalty Programs</option>
                </select>
                <select className='filterBtn'>
                    <option>Sort</option>
                </select>
                <select className='filterBtn'>
                    <option>Filter</option>
                </select>
            </div>
        </div>
    )
}

export default MobileProfileButton;