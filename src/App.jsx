import React from "react";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./layouts/Applayout";
import { ThemeProvider } from './components/ui/Themeprovider.jsx'

import Landingpage from "./Pages/Landingpage";
import Onboarding from "./Pages/Onboarding";
import Joblisting from "./Pages/Joblisting";
import Jobpage from "./Pages/Jobpage";
import PostJob from "./Pages/PostJob";
import SaveJob from "./Pages/SaveJob";
import MyJob from "./Pages/MyJob";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/onboarding",
        element: <ProtectedRoutes>
          <Onboarding />
        </ProtectedRoutes>,
      },
      {
        path: "/jobs",
        element: <ProtectedRoutes>
          <Joblisting />
        </ProtectedRoutes>,
      },
      {
        path: "/job/:id",
        element: <ProtectedRoutes>
          <Jobpage />
        </ProtectedRoutes>,
      },
      {
        path: "/post-job",
        element: <ProtectedRoutes>
          <PostJob />
        </ProtectedRoutes>,
      },
      {
        path: "/saved-job",
        element:<ProtectedRoutes>
          <SaveJob />
        </ProtectedRoutes>,
      },
      {
        path: "/my-jobs",
        element: <ProtectedRoutes>
          <MyJob />
        </ProtectedRoutes>,
      },
    ],
  },
]);
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
