import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser(); // ✅ correct destructuring
  const location = useLocation(); // get current URL

  // Wait until Clerk finishes loading
  if (!isLoaded) return null; // or a loader/spinner

  // Redirect to sign-in if user is not signed in
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" replace state={{ from: location }} />;
  }

  // User is signed in
  return children;
};

export default ProtectedRoutes;
