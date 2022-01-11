import {MutableRefObject, useContext, useRef} from "react";
import {TestContext} from "@/components/Hooks/ContextCreator";

const ContextUser1 = () => {
    const {name, setNameHandler} = useContext(TestContext)
    const input:MutableRefObject<any> = useRef()

    const onClickSetName = () => {
        setNameHandler(input.current.value)
    }

    return (
        <>
            {/*<p>{name}</p>*/}
            <input ref={input} type="text"/>
            <button onClick={onClickSetName}>SET</button>
        </>
    )
}

export default ContextUser1