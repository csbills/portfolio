import { useEffect, useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 80
            if (show) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <nav className={navbar ? "fixed w-full px-20 py-0 z-50 font-ubuntu bg-gray-900" : "fixed w-full px-20 py-0 z-50 font-ubuntu"}>
            <div className="max-w-6xl flex md:justify-between items-center m-auto">
                <div className="text-blue-500 font-medium text-2xl">
                    <a href="#">Portfolio.</a>
                </div>
                <ul className="flex relative">
                    <li className="list-none my-2">
                        <Link to="home" duration={500} smooth={true} spy={true}
                            className={navbar ? "text-lg font-medium text-gray-300 px-2 py-0 hover:text-blue-500" :
                                "text-lg font-medium text-gray-800 px-2 py-0 hover:text-blue-500"}>
                            Home
                       </Link>
                    </li>
                    <li className="list-none my-2">
                        <Link to="about" duration={500} smooth={true} spy={true}
                            className={navbar ? "text-lg font-medium text-gray-300 px-2 py-0 hover:text-blue-500" :
                                "text-lg font-medium text-gray-800 px-2 py-0 hover:text-blue-500"}>
                            About
                       </Link>
                    </li>
                    <li className="list-none my-2">
                        <a href="#home" className={navbar ? "text-lg font-medium text-gray-300 px-2 py-0 hover:text-blue-500" :
                            "text-lg font-medium text-gray-800 px-2 py-0 hover:text-blue-500"}>
                            Skills
                       </a>
                    </li>
                    <li className="list-none my-2">
                        <a href="#home" className={navbar ? "text-lg font-medium text-gray-300 px-2 py-0 hover:text-blue-500" :
                            "text-lg font-medium text-gray-800 px-2 py-0 hover:text-blue-500"}>
                            Services
                       </a>
                    </li>
                    <li className="list-none my-2">
                        <a href="#home" className={navbar ? "text-lg font-medium text-gray-300 px-2 py-0 hover:text-blue-500" :
                            "text-lg font-medium text-gray-800 px-2 py-0 hover:text-blue-500"}>
                            Contact
                       </a>
                    </li>
                </ul>

                <div>
                    <a href="#" target="_blank" className="text-lg mx-2 my-2 text-blue-500">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" target="_blank" className="text-lg mx-2 my-2 text-blue-500">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com/cai0henr" target="_blank" className="text-lg mx-2 my-2 text-blue-500">
                        <i className="fab fa-instagram" />
                    </a>
                </div>
            </div>
        </nav>
    )
}