import {Component} from "react";

type Props = {
    number:number
}

export default class CounterList extends Component<Props> {
    render() {
        let list = []
        if (this.props.number > 0) {
            for (let i = 0; i < this.props.number; i++) {
                list.push(<li key={i}>{i + 1}번째 리스트입니다.</li>)
            }
        }

        return (
            <ul>
                {list}
            </ul>
        )
    }
}
