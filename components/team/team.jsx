import TeamCard from "./teamCard";
import { teamData } from "./teamData";
import './team.css'

const Team = () => {
    return (
        <>
            <div style={{
                // border: '2px solid red',
                // height: '120vh',
                background: '#00151E',
                position:'relative',
                padding:'2rem 0'
            }}>
                <h1 style={{
                    position:'absolute',
                    top:'4.6rem',
                    left:'10rem',
                    color:"var(--primary-light)",
                }} className="teamHead">Founding Team</h1>
                <div style={{
                    // border: '2px solid red',
                    backgroundImage: `url(http://localhost:8091/team/team-bg.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // height: '80vh',
                    width: '85%',
                    margin: ' 4rem auto',
                    padding:'2rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}>
                    {/* <legend>Founding Team</legend> */}
                    {
                        teamData.map((teamMember, index) => {
                            return (
                                <TeamCard
                                    name={teamMember.name}
                                    designation={teamMember.designation}
                                    img={teamMember.img}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Team;