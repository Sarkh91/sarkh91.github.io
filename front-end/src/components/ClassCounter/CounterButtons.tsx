import React, {Component, Fragment, MouseEventHandler} from "react";

type Props = {
    increaseFn:MouseEventHandler<HTMLButtonElement>,
    decreaseFn:MouseEventHandler<HTMLButtonElement>
}

export default class CounterButtons extends Component<Props> {
    render() {
        return (
            <Fragment>
                <button onClick={this.props.increaseFn}>+</button>
                <button onClick={this.props.decreaseFn}>-</button>
            </Fragment>
        )
    }
}