import styles from './input.module.css';

const inputStyle = {
    background: '#004351',
    width:'90%',
    maxWidth:'70%',
    padding: '1rem',
    margin: '1rem',
    border: 'none',
    outline: 'none',
}
const Input = ({ placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} style={inputStyle} className={styles.input} />
    )
}

export default Input;