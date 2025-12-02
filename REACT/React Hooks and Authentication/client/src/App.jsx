import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import CustomHookDemo from "./components/custom-hook-demo/CustomHookDemo"
import ContextDemo from "./components/context-demo/ContextDemo"
import Login from "./components/login/Login"
import { useState } from "react"
import UserContext from "./contexts/UserContext"

function App() {
    const [user, setUser] = useState({});

    const loginHandler = (user) => {
        setUser(user);
    };

    const logoutHandler = () => {
        setUser({});
    };
    
    const contextValue = {
        user,
        isAuthenticated: !!user.email,
        onLogin: loginHandler,
        onLogout: logoutHandler,
    };

    return (
        <UserContext.Provider value={contextValue}>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/custom-hook-demo" element={<CustomHookDemo />} />
                <Route path="/context-demo" element={<ContextDemo />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </UserContext.Provider>
    )
}

export default App
