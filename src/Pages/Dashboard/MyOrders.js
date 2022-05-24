import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    console.log(user);
    const [myorder, setMyOrder] = useState([])
    //console.log(myorder);
    useEffect(() => {

        fetch(`http://localhost:5000/myorder?customerEmail=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')

                }

                return res.json()
            })
            .then(data => {
                console.log(data);
                setMyOrder(data)
            })
    }, [user?.email, navigate])
    return (
        <div>
            <h1>{user?.displayName} Has:{myorder.length} Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>CustomerEmail</th>
                            <th>OrderQuantity</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorder.map(order => <>
                                <tr>
                                    <th>{order.product}</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.customerEmail}</td>
                                    <td>{order.orderQuantity}</td>
                                    {(order.pricePerUnit && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.pricePerUnit && order.paid) && <span className='text-success'>paid</span>}
                                    {/* <button class="btn btn-xs">delete</button> */}
                                </tr>
                            </>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;