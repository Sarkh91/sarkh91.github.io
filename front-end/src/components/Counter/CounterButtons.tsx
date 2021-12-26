import React, {Fragment} from "react";

const CounterButtons = ({increaseFn, decreaseFn}:{increaseFn:any, decreaseFn:any}) => {

    return (
            <Fragment>
                <button onClick={increaseFn}>+</button>
                <button onClick={decreaseFn}>-</button>
            </Fragment>
        )
}

export default CounterButtons