import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`https://bicycles-manufacture-server.onrender.com/user/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error(`Failed to make an  Admin`)
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`successfully make an admin`)
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : 'already an admin'} </td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default UserRow;