import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes"; 

import "./App.css";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Clerk Publishable Key. Set VITE_CLERK_PUBLISHABLE_KEY in your .env file."
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{ baseTheme: shadesOfPurple }} // ✅ correct syntax
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
