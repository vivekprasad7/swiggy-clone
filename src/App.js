import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";  
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import RestaurantInfo from "./pages/restaurantInfo/RestaurantInfo";


const App = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path:"/",
                element: <Body/>,
            },
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
            {
                path: "/restaurants/:resId",
                element:<RestaurantInfo/>,
            }
        ],
        errorElement: <Error/>
    }, 

])





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>) 