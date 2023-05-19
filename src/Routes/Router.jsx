import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/allToys",
                element : <AllToys></AllToys>
            },
            {
                path : "/myToys",
                element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path : "/AddToy",
                element : <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path : "/blogs",
                element : <Blogs></Blogs>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/login",
                element : <Login></Login>
            }
        ]
    }
])

export default router