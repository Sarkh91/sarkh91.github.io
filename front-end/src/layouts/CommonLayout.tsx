import {Gnb} from "@/components";
import Routes from "@/routes";
import {HashRouter as Router} from "react-router-dom";
import {Container} from "@mui/material";
import React from "react";

const CommonLayout = () => (
        <Router>
            <Container>
                <Gnb/>
                <Routes />
            </Container>
        </Router>
    )

export default CommonLayout
