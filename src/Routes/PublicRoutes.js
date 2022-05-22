import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


export const publicRoute = [
    {path : "/", name : "Home", Component: Home},
    {path : "/blogs", name : "Blogs", Component: Blogs},
    {path : "/login", name : "Login", Component: Login},
  ];

