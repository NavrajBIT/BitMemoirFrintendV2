import React from 'react'
// import nikhil from '../../public/team/nikhil.png'

const TeamCard = (props) => {
    return (
        <div style={{
            border: '0.1px solid var(--primary-light)',
            background:"var(--primary-dark)",
            width: '12rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 8px',
            margin:'1.5rem'
        }}>
            <img src={props.img} alt="nikhil" style={{width:'100%'}}/>
            {/* <img src="nikhil" alt="nikhil" /> */}
            <span style={{marginTop:"8px"}}>{props.designation}</span>
            <h4 style={{ 
              margin: '1rem 0',
              color:'var(--primary-light)'
               }}>{props.name}</h4>
        </div>
    )
}

export default TeamCard;