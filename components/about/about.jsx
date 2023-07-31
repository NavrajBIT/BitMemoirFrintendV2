import Team from "./team/team"
import Partners from "./partners/partners";

const about = () => {
    return (
        <div style={{
            // border:'2px solid red',
            backgroundImage: `url(/about/about-bg.png)`,
            backgroundColor:'#001822',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>

            <Team />
            <Partners />
        </div>
    )
}

export default about;