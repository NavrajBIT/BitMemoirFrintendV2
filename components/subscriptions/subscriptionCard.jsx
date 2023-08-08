import './subscription.css';

const cardHead = {
    color: 'white',
    position: 'absolute',
    top: '-0.8rem',
    left: '1.5rem',
}

const SubscriptionCard = ({ type, certificates, price }) => {
    return (
        <div className="subscriptionCards">
            <h3 className="subscriptionCardHead" style={cardHead}>{type}</h3>
            <div>
                <h1 style={{
                    color: 'var(--primary-light)',
                    fontSize: '3.5rem'
                }} className="certificates">{certificates}</h1>
                <div style={{
                    width: '100%',
                    textAlign: 'center'
                }}>Ceritificates</div>
            </div>
            <div className="priceInfo">{price}$ / Ceritificates</div>
            <button className='subscriptionBtn'>Buy Now</button>
        </div>
    )
}

export default SubscriptionCard;