import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";

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
                element : <MyToys></MyToys>
            },
            {
                path : "/AddToy",
                element : <AddToy></AddToy>
            },
            {
                path : "/blogs",
                element : <Blogs></Blogs>
            }
        ]
    }
])

export default router