import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";

export const CraftyInspire = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};
