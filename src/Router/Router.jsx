import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Shop/Menu";
import Signup from "../components/Signup";
import UpdateProfile from "../Pages/dashboard/UpdateProfile";
import ProductPage from "../components/Products";
import Email from "../components/Email";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },{
        
      },
      
      
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      },{
        path:"/products/ywet6732878sgv",
        element:<ProductPage />
      },
      {
        path:"/email",
        element:<Email />
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  },

 ,
]);

export default router;
