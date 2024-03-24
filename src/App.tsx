
import Home from "./pages/outLevel/home/Home"
import Login from "./pages/outLevel/login/Login";
import Products from "./pages/outLevel/products/Products"
import Users from "./pages/outLevel/users/Users"
import {
  createBrowserRouter,
  RouterProvider,
  // Router,
  // Link,
  Outlet,
} from "react-router-dom";
import "./styles/global.scss"
import Navbar from "./pages/appLevel/navbar/Navbar";
import Menu from "./pages/appLevel/menu/Menu";
import Footer from "./pages/appLevel/footer/Footer";

function App() {

  const Layout =() =>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Products/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    },
    // {
    //   path: "/",
    //   element: (
    //     <Home/>
    //   ),
    // },
    // {
    //   path: "users",
    //   element: <Users/>,
    // },
    // {
    //   path: "products",
    //   element: <Products/>,
    // },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
