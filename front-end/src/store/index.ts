import counter from './Counter/CounterStore'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counter
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>