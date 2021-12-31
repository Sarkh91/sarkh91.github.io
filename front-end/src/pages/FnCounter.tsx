import React from "react";
import {FnCounterNumber, FnCounterButtons, FnCounterList} from "@/components";
import {useSelector, useDispatch} from "react-redux";
import {increase, decrease} from "@/store/Counter/CounterStore";
import {Fragment} from "react";
import {RootState} from "@/store";

const FnCounter:React.FC = () => {
    const number = useSelector((state:RootState) => state.counter.number)
    const dispatch = useDispatch()

    const onIncrease = () =>{
        dispatch(increase())
    }

    const onDecrease = () => {
        if (number <= 1){
            return false
        }
        dispatch(decrease())
    }


   return (
        <Fragment>
            <h1>Functional Counter</h1>
            <FnCounterNumber number={number}/>
            <FnCounterButtons increaseFn={onIncrease} decreaseFn={onDecrease} />
            <FnCounterList number={number} />
        </Fragment>
    )
}

export default FnCounter;