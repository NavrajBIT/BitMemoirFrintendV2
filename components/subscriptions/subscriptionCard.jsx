import styles from './subscription.module.css';

const cardHead = {
    color: 'white',
    position: 'absolute',
    top: '-0.8rem',
    left: '1.5rem',
}

const SubscriptionCard = ({ type, certificates, price }) => {
    return (
        <div className={styles.subscriptionCards}>
            <h3 className={styles.subscriptionCardHead} style={cardHead}>{type}</h3>
            <div>
                <h1 style={{
                    color: 'var(--primary-50)',
                    fontSize: '3.5rem'
                }} className={styles.certificates}>{certificates}</h1>
                <div style={{
                    width: '100%',
                    textAlign: 'center'
                }}>Ceritificates</div>
            </div>
            <div className={styles.priceInfo}>{price}$ / Ceritificates</div>
            <button className={styles.subscriptionBtn}>Buy Now</button>
        </div>
    )
}

export default SubscriptionCard;