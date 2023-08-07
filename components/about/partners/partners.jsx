import { partnersData } from "./partnersData";
import './partners.css';

const Partners = () => {
  return (
    <div style={{
        // border: '2px solid red',
        position:'relative',
        padding:'2rem 0'
    }}>
        <h1 style={{
            position:'absolute',
            top:'4.6rem',
            left:'10rem',
            color:"var(--primary-light)",
        }} className="teamHead">Our Partners</h1>
        <div style={{
            border:'1px solid var(--primary-dark)',
            width: '85%',
            margin: ' 4rem auto',
            padding:'4rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            gap:'3.5rem',
            flexWrap: 'wrap',
        }} className="partnersImgDiv">
            {
                partnersData.map((partner,index)=>{
                    return(
                        <img src={partner.img} alt="" className="partnersImg" key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Partners