import teamCard from "./teamCard";
import { teamData } from "./teamData";

const team = () => {
    return (
        <>
            <h1>team</h1>
            <div style={{
                border: '2px solid red',
                height: '120vh',
                background: '#00151E'
            }}>
                <div style={{
                    border: '2px solid red',
                    backgroundImage: `url(http://localhost:8091/team/team-bg.png)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '80vh',
                    width: '80%',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                }}>
                    {/* <legend>Founding Team</legend> */}
                    {
                        teamData.map((teamMember, index) => {
                            return (
                                <teamCard
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

export default team;