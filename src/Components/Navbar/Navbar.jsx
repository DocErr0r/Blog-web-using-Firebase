import React, { useContext, useState } from 'react';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import myContext from '../../contexts/data/myContext';

const Navbar = () => {
    const { mode, toggleTheme } = useContext(myContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const handleLogout = () => {
        // Placeholder for logout functionality
        console.log('Logged out');
        closeDropdown(); // Close dropdown after logout
    };

    return (
        <nav className={`border-gray-200 z-50 sticky top-0 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-violet-500 text-black'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" className="h-10" alt="BlogNits Logo" />
                    <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap">BlogNits</span>
                </Link>
                <div className="flex relative items-center md:order-2 space-x-3 md:space-x-0 md:gap-2 rtl:space-x-reverse">
                    <button className={`flex text-sm bg-gray-800 border rounded-full md:me-0 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-violet-500 text-black'} `} onClick={toggleTheme}>
                        <span className="sr-only">Open user menu</span>
                        <div className="p-1 md:p-2 text-white text-xl ">{mode === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</div>
                    </button>
                    <button className={`flex text-sm bg-gray-800 border rounded-full md:me-0 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-violet-500 text-black'} `} onClick={toggleDropdown}>
                        <span className="sr-only">Open user menu</span>
                        <div className="p-1 md:p-2 text-white text-xl ">
                            <AiOutlineUser />
                        </div>
                    </button>
                    {/* Dropdown menu */}
                    <div className={`z-50 ${dropdownOpen ? 'block' : 'hidden'} absolute top-7 right-10 my-4 text-base list-none ${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}divide-y divide-gray-100 rounded-lg shadow  transition-all duration-300 ease-in-out `}>
                        <ul className="py-2">
                            <li>
                                <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-400 " onClick={closeDropdown}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-400 " onClick={closeDropdown}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-400 " onClick={handleLogout}>
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="inline-flex items-center p-1 md:p-2 border border-gray-300 justify-center text-xl rounded-lg md:hidden hover:bg-gray-400 " onClick={() => setShowMenu(!showMenu)}>
                        <span className="sr-only">Open main menu</span>
                        <AiOutlineMenu />
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 relative  ${showMenu ? '' : 'hidden'}`}>
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 w-full transition-all duration-200 ease-in-out `}>
                        <li>
                            <Link to="/" className="block py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/all-blogs" className="block py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3 rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
