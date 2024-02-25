import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/course",
          element: <Courses></Courses>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path:'/course/:id',
          element: <CourseDetails></CourseDetails>
        },
        {
          path:'/course/course/:id',
          element: <CourseDetails></CourseDetails>
        }
      ],
    },
  ]);