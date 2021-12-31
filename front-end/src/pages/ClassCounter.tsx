import React from "react";
import {ClassCounterNumber, ClassCounterButtons, ClassCounterList} from "@/components";
import {connect} from "react-redux";
import {increase, decrease} from "@/store/Counter/CounterStore";
import {Fragment} from "react";
import {RootState} from "@/store";
import {Dispatch} from "redux";

type Props = {
    number: number
    increase:Function,
    decrease:Function
}

class ClassCounter extends React.Component<Props> {
    constructor(props:any) {
        super(props)

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase (){
        this.props.increase()
    }

    decrease () {
        if (this.props.number <= 1) {
            return false
        }

        this.props.decrease()
    }

    render() {
        return (
            <Fragment>
                <h1>Class Counter</h1>
                <ClassCounterNumber number={this.props.number}/>
                <ClassCounterButtons increaseFn={this.increase} decreaseFn={this.decrease} />
                <ClassCounterList number={this.props.number} />
            </Fragment>
        )
    }
}
const mapStateToProps = (state:RootState) => ({number : state.counter.number})
const mapDispatchToProps = (dispatch:Dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter)