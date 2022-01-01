import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home, FnCounter, ClassCounter, Input, Ajax} from "@/pages";

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter_fn" element={<FnCounter/>} />
        <Route path="/counter_class" element={<ClassCounter/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/ajax" element={<Ajax/>} />
    </Routes>
)


export default RoutesComponent;