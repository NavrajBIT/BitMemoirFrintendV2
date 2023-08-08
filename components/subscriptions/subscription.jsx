import Button from '../subcomponents/button/button';
import SubscriptionCard from './subscriptionCard';
import styles from './subscription.module.css';

const containerStyle = {
    // border:'2px solid red',
    background: '#0F303E',
    height: '28rem',
    maxWidth: '65rem',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: '8px',
    position: 'relative',
    margin: 'auto',
    paddingTop:'1rem'
}

const Subscription = () => {
    const subscriptionData = [
        { type: 'Silver', certificates: 100, price: 2 },
        { type: 'Gold', certificates: 1500, price: 1.75 },
        { type: 'Platinum', certificates: 1000, price: 1.5 }
    ]

    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={containerStyle} id={styles.subscriptionContainer}>
                <h1 style={{
                    color: 'var(--primary-50)',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                }} className={styles.subscriptionHead}
                >Subscription Plans
                </h1>
                <div id={styles.subscriptionCardsDiv}>
                    {
                        subscriptionData.map((plan) => {
                            return (
                                <SubscriptionCard type={plan.type} certificates={plan.certificates} price={plan.price} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Subscription ;