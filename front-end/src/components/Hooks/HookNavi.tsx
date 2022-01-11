import React from "react";
import {Link} from "react-router-dom";

const HookNavi:React.FC = () => {

    return (
        <ul className="hooks">
            <li><Link to="/hooks/context">useContext</Link></li>
            <li><Link to="/hooks/reducer">useReducer</Link></li>
            <li><Link to="/hooks/callback">useCallback</Link></li>
        </ul>
    )
}

export default HookNavi