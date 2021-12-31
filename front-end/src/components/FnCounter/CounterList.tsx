const CounterList = ({number}:{number:number}) => {

    let list = []
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            list.push(<li key={i}>{i + 1}번째 리스트입니다.</li>)
        }
    }

    return (
            <ul>
                {list}
            </ul>
        )
}

export default CounterList