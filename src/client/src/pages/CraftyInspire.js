import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard";
import { Submission } from "./Submission";
import { Project } from "./Project";
import { WhyUs } from "./WhyUs";
import { GetInspired } from "./GetInspired";

export const CraftyInspire = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/get-inspired" element={<GetInspired />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/submit" element={<Submission />} />
                <Route path="/project/:id" element={<Project />}  />
            </Routes>
        </BrowserRouter>
    );
};