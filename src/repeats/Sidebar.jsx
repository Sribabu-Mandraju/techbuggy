import { useState, useEffect } from 'react';
import Tabs from '../constants/tabs'
import { Link } from 'react-router-dom'

const Sidebar = ({ }) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, [])


    const Desktop = () => {
        return (
            <div className={`  bg-[#ede9e9] w-full max-w-[240px] min-w-[240px] flex flex-col h-screen  z-[1]`} style={{
            }}>
                {
                    Tabs.map((data) => (
                        <div className="ps-3 my-3 py-1 mx-1 font-bold text-black">
                            <Link to={data.path}>{data.name}</Link>
                        </div>
                    ))
                }


            </div>
        );
    }

    const Mobile = () => {
        return (
            <div className={` w-full  bg-[#ede9e9] min-w-[240px] mt-[40px] h-[100vh] z-[1] `}>
                {
                    Tabs.map((data) => (
                        <div className="ps-3 my-3 py-1 mx-1 font-bold text-black">
                            <Link to={data.path}>{data.name}</Link>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <>
            {width > 900 ? <Desktop /> : <Mobile />}
        </>
    );
}

export default Sidebar;
