import React, {Fragment, MouseEventHandler} from "react";
import {Button} from "@mui/material";

const CounterButtons = ({increaseFn, decreaseFn}:{increaseFn:MouseEventHandler<HTMLButtonElement>, decreaseFn:MouseEventHandler<HTMLButtonElement>}) => {

    return (
            <Fragment>
                <Button variant="contained" onClick={increaseFn}>+</Button>
                <Button variant="contained" onClick={decreaseFn}>-</Button>
            </Fragment>
        )
}

export default CounterButtons