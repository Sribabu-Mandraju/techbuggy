import '../../index.css'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi";





const Login = () => {
    return (
        <>
            <section className="w-100  bg-5 h-screen flex items-center">
                <div className="flex flex-col w-[97%] mx-auto max-w-[400px] h-[auto]   bg-7 text-white">
                    <div className="text-center text-3xl lg:text-4xl text-1">Login!</div>
                    <form action="" className="flex flex-col">
                        <div className="flex flex-col w-[95%] mx-auto mt-3">
                            <label htmlFor="" className="block d-text-1 md-4  lg:text-2xl">Name</label>
                            <span className="flex items-center h-[30px] relative">
                                <input type="text" className="block w-[100%] mx-auto rounded-[3px] h-[100%] bg-5 text-1" />
                                <div className="bg-3 h-[100%] w-[40px] flex items-center justify-center rounded-tr-[3px] rounded-br-[3px] cursor-pointer" style={{ marginLeft: "-40px" }}><FaUser /></div>
                            </span>
                        </div>
                        <div className="flex flex-col w-[95%] mx-auto mt-3">
                            <label htmlFor="" className="block d-text-1 md-4  lg:text-2xl">Email</label>
                            <span className="flex items-center h-[30px] relative">
                                <input type="email" className="block w-[100%] mx-auto rounded-[3px] h-[100%] bg-5 text-1" />
                                <div className="bg-3 h-[100%] w-[40px] flex items-center justify-center rounded-tr-[3px] rounded-br-[3px] cursor-pointer" style={{ marginLeft: "-40px" }}><MdEmail /></div>
                            </span>
                        </div>
                        <div className="flex flex-col w-[95%] mx-auto mt-3">
                            <label htmlFor="" className="block d-text-1 md-4  lg:text-2xl">Password</label>
                            <span className="flex items-center h-[30px] relative">
                                <input type="password" className="block w-[100%] mx-auto rounded-[3px] h-[100%] bg-5 text-1" />
                                <div className="bg-3 h-[100%] w-[40px] flex items-center justify-center rounded-tr-[3px] rounded-br-[3px] cursor-pointer" style={{ marginLeft: "-40px" }}><HiEyeOff /></div>
                            </span>
                            <span className="d-text-1">Forget Password ?<a href="#" className="text-[green]">Click here</a></span>
                        </div>
                        <div className="flex flex-col w-[95%] mx-auto mt-3">
                            <span className="flex items-center h-[30px] relative">
                                <input type="submit" value="submit" className="block w-[100%] mx-auto rounded-[3px] h-[100%]   bg-[#f2f2f2] text-[black] hover:bg-[#666666] hover:text-[#f2f2f2] font-bold" />
                            </span>
                        </div>
                        <div className="flex flex-col w-[95%] mx-auto mb-3">
                            <span className="d-text-1 ">Don't have an account?<a href="#" className="text-[green] underline ps-[5px]">register</a></span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Login