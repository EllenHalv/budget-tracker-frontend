import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

const LoginComponent = () => {
    const { setAuth } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                username,
                password,
            });

            // Log the response for debugging
            console.log("Login successful:", response.data);

            // Set auth state after successful login
            setAuth({
                token: response.data.jwt,
                username: response.data.user.username,
                userId: response.data.user.id });

            // Log out navigation for now, to avoid breaking navigation
            console.log("Navigating to home...");
        } catch (err) {
            setError("Invalid login credentials");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default LoginComponent;
