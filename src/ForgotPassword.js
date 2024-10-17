import { useState } from "react";
import api from "./api";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/users/forgot-password", { email });
            setMessage("Password reset email sent. Please check your inbox.");
        } catch (error) {
            setMessage("Error sending reset email");
        }
    };

    return (
        <div className="forgot-password">
            <h2>Forgot Password</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
