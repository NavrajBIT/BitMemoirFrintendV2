import Team from "./team/team"
import Partners from "./partners/partners";

const about = () => {
    console.log('about comp');
    return (
        <div>
            <Team />
            <Partners />
        </div>
    )
}

export default about;