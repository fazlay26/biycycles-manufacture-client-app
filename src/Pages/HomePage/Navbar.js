import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const navigate = useNavigate()
    const logOut = () => {
        signOut(auth)
        navigate('/')
        localStorage.removeItem('accessToken')//signout korle localstorage theke token tao remove hoye jabe
    }
    const [user, loading, error] = useAuthState(auth);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        <li><a>Accescorries</a></li>

        <li>{user ? <li><Link to='/dashboard'>Dashboard</Link></li> : ''}</li>
        <li>{user ? <button onClick={logOut} class="btn btn-link mt-3">logout({user?.displayName})</button> : <Link to='/login'>Login</Link>}</li>
    </>



    return (
        <div style={{ backgroundColor: '#1BA370', }} className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul style={{ backgroundColor: '#1BA370', }} tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">SuperBikee</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>
                <label tabIndex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;