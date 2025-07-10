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
import CartContextProvider from "./context/CartContextProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Footer from "./components/Footer/Footer";
import CategoryTable from "./components/WomenCategory/CategoryTable";
import Checkout from "./components/checkout/checkout";
import { Offline } from "react-detect-offline";
import ForgotPassword from "./components/ForgetPassword/ForgotPassword";
import ResetPasword from "./components/ResetPasword/ResetPasword";
import MenCategory from "./components/MenCategory/MenCategory";
import ElectronicsCategory from "./components/ElectronicsCategory/ElectronicsCategory";



let query = new QueryClient()

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoute> <Products /> </ProtectedRoute>  },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "footer", element: <Footer /> },
      { path: "product-detail/:id/:category", element: <ProtectedRoute> <Productdetail/> </ProtectedRoute> },
      { path: "category-table/:women", element: <ProtectedRoute> <CategoryTable/> </ProtectedRoute> },
      { path: "mencategory/:men", element: <ProtectedRoute> <MenCategory/> </ProtectedRoute> },
      { path: "electronic/:elctronics", element: <ProtectedRoute> <ElectronicsCategory/> </ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Carts /></ProtectedRoute>  },
      { path: "checkout/:cartid", element: <ProtectedRoute><Checkout /></ProtectedRoute>  },
      { path: "forgot-passord", element: <ForgotPassword /> },
      { path: "resetPassword", element: <ResetPasword /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
    <CartContextProvider>
      <UserContextProvider>
        <QueryClientProvider client={query}>
          <ReactQueryDevtools></ReactQueryDevtools>
            <RouterProvider router={routes}></RouterProvider>
    <Offline> <h1 className="flex justify-center items-center text-red-700">Only shown offline (surprise!)</h1></Offline>
            <Toaster/>
        </QueryClientProvider>
      </UserContextProvider>
    </CartContextProvider>
      
    </>
  );
}

export default App;
