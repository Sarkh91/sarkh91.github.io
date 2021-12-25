import {Gnb} from "@/components";
import Routes from "@/routes";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";

const CommonLayout = () => (
        <Router>
            <Gnb/>
            <Routes />
        </Router>
    )

export default CommonLayout
