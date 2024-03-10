import { PiHamburgerFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

const Header = ({ userName, toggleSidebar, width }) => {
    return (
        <div className="w-full  flex items-center  justify-between  top bg-white  h-[40px] z-[2000]" style={{ zIndex: "200", position: "sticky", top: "0px", left: "0px" }}>
            <div className="flex items-center">
                <div className="me-2">
                    <PiHamburgerFill className="text-black cursor-pointer" onClick={toggleSidebar} />
                </div>
            </div>
            <div className="flex  flex-row-reverse  justify-start  items-center " >
                <div className="flex items-center">
                    <div className="w-[30px] h-[30px] mx-3 bg-3 my-2 text-center flex items-center justify-center rounded-[50%] cursor-pointer">
                        <span className="text-black  text-2xl" style={{ marginBottom: "10px" }}>{userName[0]}</span>
                    </div>
                </div>
                <div className="w-full flex items-center  mx-3">
                    <span className="z-[0]" style={{ marginRight: "-20px" }}><IoIosSearch /></span>
                    <input type="text" className="bg-[#F1F0FF] w-[160px]  ps-[24px] border-[0px] rounded-[4px] h-[30px]" placeholder="search..." />
                </div>
            </div >
        </div >
    );
}

export default Header;
