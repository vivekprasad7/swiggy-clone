import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";  // 1
import About from "./pages/about/About";


const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

//  2
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
    },
    {
        path:"/about",
        element: <About/>,
    },
    {
        path:"/contact",
        element: <About/>,
    },
    {
        path:"/cart",
        element: <About/>,
    },

])





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>) // 3