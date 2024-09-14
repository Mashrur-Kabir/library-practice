import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="mt-7 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Welcome to the Library Website</h1>
                <p className="mt-6 mb-16 text-lg">This is a simple library management application built using React.</p>
            </div>
            <nav>
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