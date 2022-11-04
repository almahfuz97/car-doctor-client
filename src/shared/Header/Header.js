import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../contexts/AuthProvider';


export default function Header() {
    const { user, loading, logout } = useContext(AuthContext);
    const navigate = useNavigate();


    const menuItems = !user?.uid ? <>
        <Link to='/'>
            <li className='font-semibold'>Home</li>
        </Link>
        <Link to='/login'>
            <li className='font-semibold'>Login</li>
        </Link>
        <Link to='/signup'>
            <li className='font-semibold'>Sign Up</li>
        </Link>
    </> : <>
        <Link to='/'>
            <li className='font-semibold'>Home</li>
        </Link>
        <Link to='/orders'>
            <li className='font-semibold'>Orders</li>
        </Link>
        <li onClick={logout} className='font-semibold cursor-pointer'>Logout</li>

    </>
    return (
        <div className="navbar bg-base-100 pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" className='w-10 h-10 md:w-16 md:h-16 lg:w-28 lg:h-24' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 space-x-2">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className='btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg'>Appointment</a>
            </div>
        </div>
    )
}
