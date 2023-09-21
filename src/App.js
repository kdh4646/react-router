import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErorrPage from "./pages/Error";

/*
  path: .../product
  element: JSX is the element
  children: connected to this route
  errorElement: Error Page to be shown
  dynamic page allocation: using ":"
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErorrPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

//using router to the App
function App() {
  return <RouterProvider router={router} />;
}

export default App;
