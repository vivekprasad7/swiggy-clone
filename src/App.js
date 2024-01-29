import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";  
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import RestaurantInfo from "./pages/restaurantInfo/RestaurantInfo";
import Grocery from "./pages/grocery/Grocery";

// different from above imports, it takes path of component
const Grocery = lazy(() => import("./pages/grocery/Grocery"))


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
            },
            {
                path: "/grocery",
                element:(
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                    </Suspense>
                ),
            }
        ],
        errorElement: <Error/>
    }, 

])





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>) 