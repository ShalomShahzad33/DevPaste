import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pastes from "./features/pastes/pages/Pastes.tsx";
import PasteDetail from "./features/pastes/pages/PasteDetail.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PasteEdit from "./features/pastes/pages/PasteEdit.tsx";
import Login from "./features/auth/pages/Login.tsx";
import Signup from "./features/auth/pages/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/paste",
    element: <Pastes />,
  },
  {
    path: "/paste/:id",
    element: <PasteDetail />,
  },
  {
    path: "paste/:id/edit",
    element: <PasteEdit />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </QueryClientProvider>,
);
