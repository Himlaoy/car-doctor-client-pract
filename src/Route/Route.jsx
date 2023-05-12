import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";

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
                element:<Login></Login>
            }
        ]
    }
])

export default route;