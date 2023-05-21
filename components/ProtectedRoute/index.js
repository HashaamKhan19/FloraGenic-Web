import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

const ProtectedRoute = (WrappedComponent, allowedUserType) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, [user]);

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/login"); // Redirect to the login page if not logged in
      }
    }, [user, isLoggedIn]);

    if (!isLoggedIn) {
      return null; // Display a loading state or other UI if needed
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoute;
