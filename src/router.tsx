import { createBrowserRouter } from "react-router";
import { lazy, Suspense, type ComponentType } from "react";
import Home from "./pages/Home";
import RootLayout from "@layouts/RootLayout";
import Error from "./pages/Error";

const Cars = lazy(() => import("./pages/Cars"));
const Yachts = lazy(() => import("./pages/Yachts"));
const Investments = lazy(() => import("./pages/Investments"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const lazyRoute = (Component: ComponentType) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "automobili", element: lazyRoute(Cars) },
      { path: "nautika", element: lazyRoute(Yachts) },
      { path: "investicije", element: lazyRoute(Investments) },
      { path: "o-nama", element: lazyRoute(About) },
      { path: "kontakt", element: lazyRoute(Contact) },
    ],
  },
]);
