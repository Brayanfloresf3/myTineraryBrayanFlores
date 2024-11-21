import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function SignInRoute({ children }) {

    const token = useSelector((state) => state.authStore.token);
    if (token)
        return <Navigate to="/home" replace />;

    return children
}