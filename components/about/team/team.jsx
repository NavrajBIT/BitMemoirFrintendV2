import TeamCard from "./teamCard";
import { teamData } from "./teamData";
import './team.css'

const Team = () => {
    return (
        <>
            <div style={{
                // border: '2px solid red',
                position: 'relative',
                padding: '2rem 0'
            }}>
                <h1 style={{
                    position: 'absolute',
                    top: '4.6rem',
                    left: '10rem',
                    color: "var(--primary-light)",
                }} className="teamHead">Founding Team</h1>
                <div style={{
                    // border: '2px solid red',
                    backgroundImage: `url(/about/team/team-bg.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '85%',
                    margin: ' 4rem auto',
                    padding: '3rem 1rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap:'3rem',
                    flexWrap: 'wrap',
                }} className="teamCardDiv">
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