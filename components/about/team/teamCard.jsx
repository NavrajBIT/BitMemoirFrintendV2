import React from 'react'
// import nikhil from '../../public/team/nikhil.png'

const teamCard = (props) => {
    return (
        <div style={{
            border: '2px solid #006F88',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px 8px'
        }}>
            <img src={props.img} alt="nikhil" />
            {/* <img src="nikhil" alt="nikhil" /> */}
            <span>{props.designation}</span>
            <h4 style={{ margin: '1rem 0' }}>{props.name}</h4>
        </div>
    )
}

export default teamCard;