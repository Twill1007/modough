import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CartProvider from "./store/CartProvider";
import HomePage from "./HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
// import UserForm from "./pages/UserForm";
import CheckOutSummary from "./components/Cart/CheckOutSummary";

import OrderHistoryPage from "./pages/OrderHistoryPage";
import AdminPage from "./pages/AdminPage";
import AboutMoPage from "./pages/AboutMoPage";
import DoughPage from "./pages/DoughPage";
import { SelectionOptionsProvider } from "./store/selectionOptionsContext";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/summary" element={<CheckOutSummary />} />
    <Route path="/auth" element={<AuthenticationPage />} />

    <Route path="/orderHistory" element={<OrderHistoryPage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/aboutMo" element={<AboutMoPage />} />
    <Route path="/dough" element={<DoughPage />} />
  </Route>
);

// const router = createBrowserRouter([
//   { page: "/", element: <HomePage /> },
//   { page: "/UserForm", element: <UserForm /> },
// ]);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <CartProvider>
      <SelectionOptionsProvider>
        <RouterProvider router={router} />;
      </SelectionOptionsProvider>
    </CartProvider>
  );
}

export default App;
