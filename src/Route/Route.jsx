import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../page/Home/Home";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default route;