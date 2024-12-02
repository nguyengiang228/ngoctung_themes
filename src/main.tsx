import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./ScrollTotop.tsx";
import LoginPage from "./pages/Login/index.tsx";
import RegisterPage from "./pages/Register/index.tsx";
import ProductPage from "./pages/ProductPage/index.tsx";
import ChildPage from "./pages/ChildPage/index.tsx";
import ShopingCart from "./pages/ShopingCart/index.tsx";
import PaymentPage from "./pages/PaymentPage/index.tsx";
import OrderSuccess from "./pages/OrderSuccess/index.tsx";
import DashboardLayout from "./pages/Admin/Statistical/index.tsx";
import ProductAdmin from "./pages/Admin/Product/index.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login-user",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    { path: "/product", element: <ProductPage /> },
    {
      path: "/child-page",
      element: <ChildPage />,
    },
    {
      path: "/shoping-cart",
      element: <ShopingCart />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/order-success",
      element: <OrderSuccess />,
    },
    {
      path: "/admin",
      element: <DashboardLayout />,
    },
    {
      path: "/prod-admin",
      element: <ProductAdmin />,
    },
  ].map((x) => ({
    ...x,
    element: <ScrollToTop>{x.element}</ScrollToTop>,
  }))
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
