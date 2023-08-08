import styles from './profile.module.css'

const MobileProfileButton = () => {
    return (
        <div className={styles.mobileProfileButton}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '10px'
            }}>
                <select className={styles.selectBtn}>
                    <option hidden>Certificate Type</option>
                    <option>Dynamic certificates</option>
                    <option>Static certificates</option>
                    <option>NFTs</option>
                    <option>Souvenirs</option>
                    <option>Loyalty Programs</option>
                </select>
                <select className={styles.filterBtn}>
                    <option>Sort</option>
                </select>
                <select className={styles.filterBtn}>
                    <option>Filter</option>
                </select>
            </div>
        </div>
    )
}

export default MobileProfileButton;