import React, { useState } from 'react';
import { useLogin } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [form, setForm] = useState({ username: "", password: "", otp: "" });
    const [mode, setMode] = useState("password");
    const [error, setError] = useState("");
    const { login } = useLogin();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    // Fix: add 'e' parameter
    const handleModeChange = (e) => {
        setMode(e.target.value);
        setForm({ ...form, password: "", otp: "" });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials =
            mode === "password"
                ? { username: form.username, password: form.password }
                : { username: form.username, otp: form.otp };
        const success = login(credentials);
        if (success) {
            navigate("/dashboard");
        } else {
            setError("Invalid credentials.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <section>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
            </section>
            <section>
                <label>
                    <input
                        type="radio"
                        value="password"
                        checked={mode === "password"}
                        onChange={handleModeChange}
                    />
                    Password
                </label>
                <label style={{ marginLeft: "1rem" }}>
                    <input
                        type="radio"
                        value="otp"
                        checked={mode === "otp"}
                        onChange={handleModeChange}
                    />
                    OTP
                </label>
            </section>
            {mode === "password" ? (
                <section>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </section>
            ) : (
                <section>
                    <label>OTP:</label>
                    <input
                        type="text"
                        name="otp"
                        value={form.otp}
                        onChange={handleChange}
                        required
                    />
                </section>
            )}
            {error && (
                <section style={{ color: "cyan", marginTop: "1rem" }}>{error}</section>
            )}
            <section>
                <button type="submit">Login</button>
            </section>
        </form>
    );
}

export default LoginForm;