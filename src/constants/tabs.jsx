import { SiWindows11 } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";




const Tabs = [
    { tab: "dashboard", name: "Dashboard", path: "/dashboard", icon: (<SiWindows11 />) },
    { tab: "my-subject", name: "My Subject", path: "/my-subject", icon: (<FaGraduationCap />) },
    { tab: "subscription", name: "Subscription", path: "/subscription", icon: (<MdOutlineWorkspacePremium />) },
    { tab: "messages", name: "Messages", path: "/messages", icon: (<FaEnvelope />) },
    { tab: "help", name: "Help", path: "/help", icon: (<FaQuestionCircle />) },
    { tab: "settings", name: "Settings", path: "/settings", icon: (<IoSettingsOutline />) },
]
export default Tabs