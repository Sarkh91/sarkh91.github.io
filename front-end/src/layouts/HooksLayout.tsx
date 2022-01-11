import {HookNavi} from "@/components";
import {Outlet} from "react-router-dom";

const HooksLayout = () => (
    <>
        <HookNavi/>
        <Outlet/>
    </>
)

export default HooksLayout