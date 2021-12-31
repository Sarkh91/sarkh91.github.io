import {Component} from "react";

type Props = {
    number:number
}


export default class CounterNumber extends Component<Props> {
    render() {
        return (
            <h2>{this.props.number}</h2>
        )
    }
}
