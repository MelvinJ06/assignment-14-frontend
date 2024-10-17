import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "./api";

function ResetPassword() {
    const { token } = useParams(); 
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post(`/users/reset-password/${token}`, { password });
            setMessage("Password reset successfully. You can now log in.");
        } catch (error) {
            setMessage("Error resetting password");
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default ResetPassword;
