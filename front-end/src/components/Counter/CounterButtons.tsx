import React, {Fragment, MouseEventHandler} from "react";

const CounterButtons = ({increaseFn, decreaseFn}:{increaseFn:MouseEventHandler<HTMLButtonElement>, decreaseFn:MouseEventHandler<HTMLButtonElement>}) => {

    return (
            <Fragment>
                <button onClick={increaseFn}>+</button>
                <button onClick={decreaseFn}>-</button>
            </Fragment>
        )
}

export default CounterButtons