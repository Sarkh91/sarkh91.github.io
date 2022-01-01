
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>
type CounterState = {
    number:number
}

const initialState:CounterState = {
    number : 1
}

// 액션 타입
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counterDECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const

// 액션
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})
export const increaseBy = (diff:number) => ({
    type: INCREASE_BY,
    payload: diff
})

function counter (state:CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREASE:
            return {number: state.number + 1}
        case DECREASE:
            return {number: state.number - 1}
        case INCREASE_BY:
            return {number: state.number + action.payload}
        default:
            return state
    }
}

export default counter