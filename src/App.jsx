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
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <Joblisting />,
      },
      {
        path: "/job/:id",
        element: <Jobpage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SaveJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJob />,
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
