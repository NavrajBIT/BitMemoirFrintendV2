import './input.css';

const inputStyle = {
    maxWidth: '70%',
    width: '90%',
    background: '#004351',
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    outline: 'none',
}
const Input = ({ placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} style={inputStyle} className="input"/>
    )
}

export default Input;