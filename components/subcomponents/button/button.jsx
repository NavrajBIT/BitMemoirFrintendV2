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
            margin: buttonText === 'Download' ? '2rem' : '0',
            marginTop: '1rem !important',
            cursor: 'pointer',
        }} onClick={btnClicked} id="buttonComp">
            {buttonText}
        </button>
    )
};

export default Button;
