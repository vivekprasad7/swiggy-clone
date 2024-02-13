import UserClass from "../../classComponents/UserClass";
import User from "../../components/user/User";

const About = () => {
    return(
        <div >
            <h1>About Page</h1>
            <User name={"Baloo"}/>
            <UserClass name={"Class Wala Baloo"}/>
         
        </div>
    )
}

export default About;