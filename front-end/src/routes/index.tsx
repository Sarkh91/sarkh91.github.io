import React from "react";
import {Routes, Route} from 'react-router-dom'
import {
    Home,
    FnCounter,
    ClassCounter,
    BoxOfficeRanking,
    Input,
    Covid19,
    AirInfo,
    ContextView,
    ReduceView, CallbackView
} from "@/pages";
import HooksLayout from "@/layouts/HooksLayout";

const RoutesComponent = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter_fn" element={<FnCounter/>}/>
        <Route path="/counter_class" element={<ClassCounter/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/boxoffice" element={<BoxOfficeRanking/>}/>
        <Route path="/covid19" element={<Covid19/>}/>
        <Route path="/airinfo" element={<AirInfo/>}/>
        <Route path="/hooks/*" element={<HooksLayout/>}>
            <Route path="context" element={<ContextView />}/>
            <Route path="reducer" element={<ReduceView />}/>
            <Route path="callback" element={<CallbackView/>}/>
        </Route>
    </Routes>
)


export default RoutesComponent;