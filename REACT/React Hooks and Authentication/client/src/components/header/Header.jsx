import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function Header() {
    const { isAuthenticated, onLogout, user } = useContext(UserContext);
    return (
        <nav className="w-full bg-white shadow mb-8 p-4 rounded-2xl flex items-center justify-between">
            <div className="text-xl font-bold">MyApp</div>
            <div className="flex space-x-4 text-sm font-medium">
                <Link to="/" className="hover:text-blue-600">Home</Link>
                <Link to="/custom-hook-demo" className="hover:text-blue-600">Custom Hook</Link>
                <Link to="/context-demo" className="hover:text-blue-600">Context</Link>
                {isAuthenticated
                    ? <button onClick={() => onLogout()} className="hover:text-blue-600">Logout</button>
                    : <Link to="/login" className="hover:text-blue-600">Login</Link>
                }
                <p>{user.email}</p>
            </div>
        </nav>
    );
}
