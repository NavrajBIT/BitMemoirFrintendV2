import './button.css';

const Button = ({ buttonText, btnClicked }) => {
    
    return (
        <button style={{
            background: 'var(--primary-60)',
            color: 'white',
            padding: '1rem',
            width: '25%',
            borderRadius: '4px',
            margin: buttonText === 'Download' ? '2rem' : '0',
            marginTop: '1rem !important',
            cursor: 'pointer',
        }} onClick={btnClicked}>
            {buttonText}
        </button>
    )
};

export default Button;
