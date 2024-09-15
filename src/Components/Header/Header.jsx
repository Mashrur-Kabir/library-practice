import { NavLink } from "react-router-dom";
import '../../index.css';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold epilogueFont">Welcome to the <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Judas Archive</span></h1>
                <p className="mt-6 mb-20 text-sm figtreeFont">A domain for the most inquisitive book lovers on the planet</p>
            </div>
            <nav className="flex items-center justify-center gap-5 figtreeFont naviBar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;