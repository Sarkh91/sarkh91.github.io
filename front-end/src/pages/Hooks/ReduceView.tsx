import {useReducer} from "react";

const reducer = (state:{number:number}, action:{type:string}) => {
    switch (action.type){
        case 'INCREMENT':
            return {number: state.number + 1}
        case 'DECREMENT':
            return {number: state.number - 1}
        default:
            return state
    }
}


const ReduceView:React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {number: 0})

    const incrementFn = () => {
        dispatch({type:'INCREMENT'})
    }

    const decrementFn = () => {
        dispatch({type:'DECREMENT'})
    }

    return (
        <>
            <h1>useReducer</h1>
            <p>{state.number}</p>

            <button onClick={incrementFn}>+</button>
            <button onClick={decrementFn}>-</button>
        </>
    )
}

export default ReduceView;