import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Checkout from "../../pages/Cheakout/Checkout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Orders from "../../pages/Orders/Orders";
import SignUp from "../../pages/SignUp/SignUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

const router= createBrowserRouter([
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
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<PrivetRoutes><Checkout></Checkout></PrivetRoutes>,
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<PrivetRoutes><Orders></Orders></PrivetRoutes>
            }
        ]
    }
])
export default router;