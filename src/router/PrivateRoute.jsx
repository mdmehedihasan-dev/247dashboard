import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    // const user = localStorage.getItem("user");
    console.log("user from PrivateRoute");
    // if (!user) return <Navigate to="/sign-in" />

    return <Outlet />
};

export default PrivateRoute;