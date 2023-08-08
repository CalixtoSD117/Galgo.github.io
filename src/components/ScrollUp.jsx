import { useEffect, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const ScrollUp = () =>
{


    const [scrollingup, setScrollingup] = useState(false);

    const handleScrollUp = () =>
    {
        if (window.scrollY > 20) {
            setScrollingup(true);
        } else {
            setScrollingup(false);
        }
    };

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScrollUp);
        return () =>
        {
            window.removeEventListener('scroll', handleScrollUp);
        };
    }, []);


    return (
        <button className={`bg-red-700 text-white text-5xl flex items-center justify-center rounded-xl w-11 h-11 z-50 right-2 md:right-10 md:bottom-10 bottom-[80px] fixed transition-all ease-in-out duration-500 ${scrollingup ? 'hover:bg-slate-800' : '-bottom-[1200px] md:-bottom-16'}`}>
            <a href="#inicio"><RiArrowDropUpLine /></a>
        </button>
    )
}

export default ScrollUp