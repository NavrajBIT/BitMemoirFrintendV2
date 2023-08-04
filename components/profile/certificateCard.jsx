import Link from 'next/link';
import './profile.css';

const CertificateCard = () => {
    return (
        <Link href="/profile/certificate">
            <div className="certificateCard">
                <img src="/profile/certificate.png" alt="" style={{ marginBottom: '10px' }} />
                <div style={{ marginBottom: '6px', position: 'relative' }}>
                    Cerificate Name
                    <img src="/profile/dots.png" alt="" id="dotIconCard" />
                </div>
                <div style={{ marginBottom: '6px', fontSize: '0.8rem' }}>Last Updated - 18/06/2023</div>
                <div style={{
                    color: 'var(--primary-light)',
                    marginBottom: '6px',
                    fontSize: '0.8rem'
                }}>Draft</div>
                <div style={{ fontSize: '0.8rem' }}>70 Units</div>
            </div>
        </Link>
    )
}

export default CertificateCard;