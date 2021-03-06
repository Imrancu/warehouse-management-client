import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    return (
        <div>

            <div className="navbar bg-base-100 px-20">
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokelinecapp="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    <Link to="/" className="btn btn-ghost normal-case text-xl md:text-center">Refrigerator Needs</Link>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokelinecapp="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box flex gap-x-3">
                            <li><NavLink to="/" className='rounded-lg'>Home</NavLink></li>
                            <li><NavLink to="/portfolio" className='rounded-lg'>Portfolio</NavLink></li>
                            {user && <li><NavLink to="/dashboard" className='rounded-lg'>Dashboard</NavLink></li>}
                            <li><NavLink to="/blogs" className='rounded-lg'>Blogs</NavLink></li>
                            <li>{user ? <button onClick={logout} className="btn rounded-lg btn-ghost">Sign Out</button> : <NavLink to="/login" className='rounded-lg'>Login</NavLink>}</li>
                        </ul>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/" className='rounded-lg'>Home</NavLink></li>
                        <li><NavLink to="/portfolio" className='rounded-lg'>Portfolio</NavLink></li>
                        {user && <li><NavLink to="/dashboard" className='rounded-lg'>Dashboard</NavLink></li>}
                        <li><NavLink to="/blogs" className='rounded-lg'>Blogs</NavLink></li>
                        <li>{user ? <button onClick={logout} className="btn rounded-lg btn-ghost">Sign Out</button> : <NavLink to="/login" className='rounded-lg'>Login</NavLink>}</li>
                    </ul>
                </div>
            </div>



            {/* <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300 px-20 z-40 fixed top-0">
                    
                    <div className="flex-1 text-neutral px-2 mx-2 text-2xl font-bold "></div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokelinecapp="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-3">

                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>

                </ul>

            </div> */}
        </div>
    );
};

export default Navbar;