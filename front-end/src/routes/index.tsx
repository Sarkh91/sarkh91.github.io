import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home, FnCounter, ClassCounter, BoxOfficeRanking, Input, Covid19, AirInfo} from "@/pages";

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter_fn" element={<FnCounter/>} />
        <Route path="/counter_class" element={<ClassCounter/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/boxoffice" element={<BoxOfficeRanking/>} />
        <Route path="/covid19" element={<Covid19/>} />
        <Route path="/airinfo" element={<AirInfo/>} />
    </Routes>
)


export default RoutesComponent;