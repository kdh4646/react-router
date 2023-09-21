import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

/*
  ex) .../product is the path
      JSX is the element
*/
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

//using router to the App
function App() {
  return <RouterProvider router={router} />;
}

export default App;
