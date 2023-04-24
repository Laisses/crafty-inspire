import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../context";
import { Home } from "./Home";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { Dashboard } from "./Dashboard";
import { Submission } from "./Submission";
import { Project } from "./Project";
import { EditProject } from "./EditProject";
import { WhyUs } from "./WhyUs";
import { GetInspired } from "./GetInspired";

export const CraftyInspire = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const str = localStorage.getItem("user");
        const u = str && JSON.parse(str);
        setUser(u);
    }, [setUser]);


    return (
        <AppContext.Provider
            value={{ user, setUser }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/why-us" element={<WhyUs />} />
                    <Route path="/get-inspired" element={<GetInspired />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/submit" element={<Submission />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/project/edit/:id" element={<EditProject />} />

                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
};
