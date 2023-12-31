const Arrow = ({ direction, clickFunction, glyph }) => (
    <div style={{
        display: "flex",
    }}>
        <div style={{
            marginTop: "10rem",
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="125" height="649" viewBox="0 0 125 649" fill="none">
            <path d="M0 0L125 273.548V405.318L0 649V0Z" fill="url(#paint0_linear_30_118)"/>
            <defs>
            <linearGradient id="paint0_linear_30_118" x1="134.259" y1="324.5" x2="2.23712e-06" y2="324.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00D4FF" stop-opacity="0.7"/>
            <stop offset="1" stop-color="#00D4FF" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
        </div>
      <div style={{
        padding:"0 0 0 1rem",
        marginTop: "28rem",
        color:"#00D4FF",
        fontSize:"2rem",
        fontFamily:"Product Sans",
      }}>
            Select <br/> Template <br/>to Start
      </div>
    </div>
);
export default Arrow;