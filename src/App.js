import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";  
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";


const App = () => {
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/cart",
                element: <Cart/>,
            },
        ],
        errorElement: <Error/>
    }, 

])





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>) 