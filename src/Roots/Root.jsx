import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/Commons/RootLayout";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import MyPayBills from "../Pages/MyPayBills";
import Bills from "../Pages/Bills";
import Home from "../Pages/Home";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import BillDetails from "../Pages/BillDetails";
import AboutUs from "../Pages/AboutUs";
import ErrorPages from "../Pages/ErrorPages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
     errorElement:<ErrorPages></ErrorPages>,
    children : [
        {
          index:true,
          Component: Home
        },
        {
           path:'/auth/login',
           Component:Login
        },
        {
           path:'/auth/register',
           Component:Register
        },
        {
            path:'/my-pay-bills',
            Component: MyPayBills
        },
        {
          path:'/bills',
          Component: Bills
        },
        {
          path:"/bill-details/:id",
          element: <PrivateRoute><BillDetails></BillDetails></PrivateRoute>
        },
        {
          path:"/about-us",
          Component: AboutUs
        }
    ]
  },
]);
export default router;