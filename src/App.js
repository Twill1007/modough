import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import CartProvider from "./store/CartProvider";
import HomePage from "./HomePage";
import AuthenticationPage from "./pages/Authentication";
// import UserForm from "./pages/UserForm";
import CheckOutSummary from "./components/Cart/CheckOutSummary";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/summary" element={<CheckOutSummary />} />
    <Route path="/auth" element={<AuthenticationPage />} />
    {/* <Route path="/auth?mode=login" element={<AuthenticationPage />} /> */}
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
