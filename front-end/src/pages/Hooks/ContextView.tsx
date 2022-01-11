import {ContextCreator, ContextUser1, ContextUser2} from "@/components";
import React, {useContext} from "react";
import {TestContext} from "@/components/Hooks/ContextCreator";

const ContextView:React.FC = () => {
    return (
        <>
            <h1>useContext</h1>
            <ContextCreator>
                <ContextUser1/>
                <ContextUser2/>
            </ContextCreator>
        </>
    )
}

export default ContextView;