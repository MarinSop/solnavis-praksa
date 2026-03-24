import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Cars from "./pages/Cars";
import Yachts from "./pages/Yachts";
import Investments from "./pages/Investments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/automobili", element: <Cars /> },
      { path: "jahte", element: <Yachts /> },
      { path: "investicije", element: <Investments /> },
      { path: "o-nama", element: <About /> },
      { path: "kontakt", element: <Contact /> },
    ],
  },
]);
