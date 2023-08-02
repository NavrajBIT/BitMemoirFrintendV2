import './button.css';

const Button = ({ buttonText, btnClicked }) => {
    console.log(buttonText);
    return (
        <button style={{
            background: 'var(--primary-dark)',
            color: 'white',
            padding: '1rem',
            width: '25%',
            borderRadius: '4px',
            marginTop: '1rem',
            margin: buttonText === 'Download' ? '2rem' : '0',
            cursor: 'pointer',
        }} onClick={btnClicked}>
            {buttonText}
        </button>
    )
};

export default Button;
