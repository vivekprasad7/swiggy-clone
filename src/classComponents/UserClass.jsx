import React from "react";
import "./UserClass.css"

class UserClass extends React.Component {

    constructor(props){
        super(props)
        console.log("prop", props)

        this.state = {
            count:0,
        }
    }

    render() {
        const { name} = this.props;
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: Himachal</h3>
            </div>
        )
    }
}

export default UserClass;