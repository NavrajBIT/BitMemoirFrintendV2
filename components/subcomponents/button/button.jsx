const Button = ({ buttonText, btnClicked }) => {
  // const ankit = () => {
  //   console.log(`ankit runs`);
  // }
  return (
    <button style={{
      background: 'var(--primary-dark)',
      color: 'white',
      padding: '1rem',
      width: '25%',
      borderRadius: '4px',
      marginTop: '1rem',
      cursor: 'pointer',
    }} onClick={btnClicked}>
      {buttonText}
    </button>
  )
};

export default Button;
