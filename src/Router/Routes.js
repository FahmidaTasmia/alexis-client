import AboutHome from "../pages/About/AboutHome";
import Contact from "../pages/Contact/Contact";
import AllServices from "../pages/Service/AllService";

import ServiceDetail from "../pages/Service/ServiceDetail";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const { default: Blog } = require("../pages/Blog/Blog");
const { default: Home } = require("../pages/Home/Home");
const { default: Login } = require("../pages/Shared/Login/Login");
const { default: Register } = require("../pages/Shared/Login/Register");

const router = createBrowserRouter([
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
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/about',
                element:<AboutHome></AboutHome>
            },

            {
                path:'/blog',
                element:<Blog></Blog>
            },

            {
                path:'/services/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params})=>fetch(`https://alexis-server.vercel.app/services/${params.id}`)
            },


            {
                path:'/service',
                element:<AllServices></AllServices>
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            }


        ]
    }
]);

export default router;