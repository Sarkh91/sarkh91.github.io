import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home, FnCounter, ClassCounter, Input} from "@/pages";

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter_fn" element={<FnCounter/>} />
        <Route path="/counter_class" element={<ClassCounter/>} />
        <Route path="/input" element={<Input/>} />
    </Routes>
)


export default RoutesComponent;