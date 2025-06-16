import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/products",
        element: <ProductListingPage />
      },
      {
        path: "/products/:id",
        element: <ProductViewPage />
      }
    ]
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
