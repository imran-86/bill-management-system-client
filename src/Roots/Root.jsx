import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/Commons/RootLayout";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import MyPayBills from "../Pages/MyPayBills";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
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
        }
    ]
  },
]);
export default router;