import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Checkout from "../page/Checkout/Checkout";
import Bookings from "../page/Bookings/Bookings";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/bookings',
                element:<PrivateRouter><Bookings></Bookings></PrivateRouter>,
            
            }
        ]
    }
])

export default route;