import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard";

export const CraftyInspire = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};
