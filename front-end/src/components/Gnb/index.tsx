import {Link} from "react-router-dom";

const Gnb = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter_fn">Counter (함수형)</Link></li>
            <li><Link to="/counter_class">Counter (클래스형)</Link></li>
            <li><Link to="/input">Input</Link></li>
        </ul>
    </nav>
)

export default Gnb
