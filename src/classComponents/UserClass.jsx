import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)
        console.log("prop", props)
    }

    render() {
        const { name} = this.props;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: Himachal</h3>
            </div>
        )
    }
}

export default UserClass;