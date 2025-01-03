import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login-comps/Login";
import Signup from "../pages/Login-comps/Signup";
import Checkout from "../pages/Checkout-comps/Checkout";
import Bookings from "../pages/Bookings";
import PrivateRoute from "./PrivateRoute";
import Details from "../Details";
import Addititional from "../pages/Addititional";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path : '/' , 
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path : '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params})=>fetch(`https://shan-doc-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path:'/details',
                element:<Details></Details>
            },
            {
                path:'/additionaldetail',
                element: <Addititional></Addititional>
            }
        ]
    },
])

export default router;