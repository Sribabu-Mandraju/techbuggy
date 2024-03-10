import { useState, useEffect } from 'react';
import Header from '../../repeats/Header';
import Sidebar from '../../repeats/Sidebar';

const Home = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(true);
    const loaction = window.loaction
    const [width, setWidth] = useState(window.innerWidth);
    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState);
    }

    const handleWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []);
    console.log(location)

    console.log("Updated showSidebar value:", showSidebar);
    console.log(location)

    return (
        <>
            <section className="w-full h-screen bg-white flex">
                {
                    width > 900 ?
                        (
                            <div className="flex justify-content-start w-full">
                                <div className="bg-[grey] " style={{
                                    marginLeft: showSidebar ? "0px" : "-240px",
                                    transitionDuration: "0.3s"
                                }}>
                                    <Sidebar />
                                </div>
                                <div className=" w-full bg-white  h-[85vh] mx-auto" style={{ width: "100%" }} >
                                    <Header userName="sribabu" toggleSidebar={toggleSidebar} width={width} />
                                    <div className="w-full flex justify-center mt-[40px] min-h-[70vh]">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        ) :
                        (
                            <div className="flex justify-content-start w-full">
                                <div className="  bg-[#ede9e9]" style={{
                                    position: "absolute",
                                    left: showSidebar ? "0px" : "-240px",
                                    transitionDuration: "0.3s"
                                }}>
                                    <Sidebar />
                                </div>
                                <div className=" bg-white h-[85vh] w-full " style={{}}>
                                    <Header userName="sribabu" toggleSidebar={toggleSidebar} width={width} />
                                    <div className="w-full flex justify-center  min-h-[70vh]">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        )
                }
            </section>
        </>
    );
}

export default Home;
