import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Useparts from '../../Hooks/Useparts';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const { id } = useParams()
    const [part] = Useparts(id)
    console.log(part);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={part.img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <h1 class="text-5xl font-bold">Hello <span className='text-green-500'>{user.displayName}</span>  you have clicked below item</h1>
                        <h1 class="text-5xl font-bold">{part.name}</h1>
                        <p class="">price(per unite):${part.PricePerUnit}</p>
                        <p class="">{part.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold mb-5 text-green-500'>Order Form</h1>
                <form className=' flex justify-center'>
                    <div className='border-2 p-10'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input value={user.displayName} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input value={user.email} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Address</span>

                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number</span>

                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <button class="btn btn-accent mt-4">Place Order</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Purchase;