const User = (props) => {
    return(
        <div className="user-card">
            <h1>Name: {props.name}</h1>
            <h2>Car: Ferrari</h2>
            <h2>Dog: Baadal</h2>
        </div>
    )
}

export default User