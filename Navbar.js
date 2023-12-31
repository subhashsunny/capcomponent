import React from "react";
import { NavLink } from 'react-router-dom';
function Navbar()
{
    return(
        <nav class="flex px-10 border-b md:shadow-lg items-center relative">
        <div class="text-lg font-bold md:py-0 py-4">
        <img src="data:image/jpeg;base64,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" alt="Infinite" width="50" height="60"/>
        </div>
        <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
            <NavLink to={"/home"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Home</span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/team"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Team</span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/about"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>About</span>
                </a>
            </li>
            </NavLink>
            <NavLink to={"/contact"}>
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <span>Contact US</span>
                </a>
            </li>
            </NavLink>
            <li>
                <div href="#" class="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                    <select>
                    <option value="" selected disabled hidden>Profile</option>
                    <option value="1">Personal Info</option>
                    <option value="2">investment</option>
                    <option value="3">Logout</option>
                   </select>
                </div>
            </li>
        </ul>
        <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
    </nav>
    );
}
export default Navbar;