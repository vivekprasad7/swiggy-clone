import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Restaurant from "./components/restaurant/Restaurant";


const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
            <Restaurant/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)