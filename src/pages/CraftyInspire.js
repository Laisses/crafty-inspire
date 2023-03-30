import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard";
import { Submission } from "./Submission";

export const CraftyInspire = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/submit" element={<Submission />} />
            </Routes>
        </BrowserRouter>
    );
};
