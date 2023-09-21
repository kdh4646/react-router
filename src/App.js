import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import ErorrPage from "./pages/Error";

/*
  createBrowserRouter()

  1.Path: .../product
  2.Element: JSX is the element
  3.Children: connected to this route
  4.ErrorElement: Error Page to be shown
  5.Index: default route if parent route path is currently active
  6.Dynamic page allocation: using ":"
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErorrPage />,
    children: [
      { index: true, element: <HomePage /> },
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
