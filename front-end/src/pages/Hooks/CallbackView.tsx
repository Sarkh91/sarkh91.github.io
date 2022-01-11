import React, {MouseEventHandler, useCallback, useState} from "react";

const CounterButton = React.memo(({onClick, count, name}:{onClick:MouseEventHandler, count: {num:number}, name:string}) => {
    console.log('Counter Button Rendered')
    return (
        <button onClick={onClick}>{name} {count.num}</button>
    )
})


const CallbackView:React.FC = () => {
    const [count1, setCount1] = useState({num: 0})
    const [count2, setCount2] = useState({num: 0})

    const increment1 = useCallback(() => {
        setCount1({num: count1.num + 1})
    }, [count1])

    const increment2 = useCallback(() => {
        setCount2({num: count2.num + 1})
    }, [count2])


    return (
        <>
            <h1>useCallback</h1>
            <CounterButton name="버튼1" onClick={increment1} count={count1} />
            <CounterButton name="버튼2" onClick={increment2} count={count2} />
        </>
    )
}

export default CallbackView;