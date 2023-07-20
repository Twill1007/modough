import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CartProvider from "./store/CartProvider";
import HomePage from "./HomePage";
// import UserForm from "./pages/UserForm";
import CheckOutSummary from "./pages/CheckOutSummary";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/summary" element={<CheckOutSummary />} />
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
      <RouterProvider router={router} />;
    </CartProvider>
  );
}

export default App;
