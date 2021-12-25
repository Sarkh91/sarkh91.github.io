import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Home, Counter, Input} from "@/pages";


const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/input" element={<Input/>} />
    </Routes>
)


export default RoutesComponent;