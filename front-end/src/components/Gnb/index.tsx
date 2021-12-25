import {Link} from "react-router-dom";

const Gnb = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/input">Input</Link></li>
        </ul>
    </nav>
)

export default Gnb
