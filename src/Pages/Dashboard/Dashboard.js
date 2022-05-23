import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl font-bold text-green-600'>Dashboard</h1>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {
                        !admin && <>
                            <li> <Link to='/dashboard'>My Orders</Link></li>
                            <li> <Link to='/dashboard/addreview'>Add a Review</Link></li>
                        </>
                    }
                    <li> <Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {admin && <>
                        <li> <Link to='/dashboard/users'>Make Admin</Link></li>
                        <li> <Link to='/dashboard/manageallproducts'>Manage All Products</Link></li>
                        <li> <Link to='/dashboard/addproduct'>Add a Product</Link></li>
                        <li> <Link to='/dashboard/manageproduct'>Manage Product</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;