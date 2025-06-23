import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/Register/Register";
import Carts from "./components/Carts/Carts";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import Products from "./components/Products/Products";
import UserContextProvider from "./context/UserContextProvider";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Productdetail from "./components/productdetail/productdetail";
// import CartContextProvider from "./context/CartContextProvider";


let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute><Products /></ProtectedRoute>  },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "product-detail/:id/:category", element: <ProtectedRoute> <Productdetail/> </ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Carts /></ProtectedRoute>  },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
                <UserContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </UserContextProvider>

    </>


  );
}

export default App;
