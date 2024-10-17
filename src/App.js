import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Home from "./home";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
