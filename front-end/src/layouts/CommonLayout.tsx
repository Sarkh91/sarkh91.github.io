import {Gnb} from "@/components";
import Routes from "@/routes";
import {HashRouter as Router} from "react-router-dom";
import React from "react";

const CommonLayout = () => (
        <Router>
            <Gnb/>
            <Routes />
        </Router>
    )

export default CommonLayout
