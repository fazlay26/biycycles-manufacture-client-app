import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Useparts from '../../Hooks/Useparts';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const [disabled, setDisabled] = useState(false)

    // console.log(user);
    const { id } = useParams()
    const [part] = Useparts(id)
    // console.log(part);
    if (loading) {
        <button className="btn loading">loading</button>
    }

    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        // if (data.productquantity < part.MinimumOrder) {
        //     setDisabled(true)
        // }
        // else {
        //     setDisabled(false)
        // }

        console.log(data)
        const order = {
            productId: part._id,
            product: part.name,
            customerName: user?.displayName,
            customerEmail: user?.email,
            adress: data.adress,
            phone: data.phone,
            pricePerUnit: part.PricePerUnit,
            orderQuantity: data.productquantity
        }
        //post
        fetch('http://localhost:5000/part', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(result => {
                //console.log(result);
                toast.success('succesfully booked the product')

            })
    };



    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={part.img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <h1 class="text-5xl font-bold">Hello <span className='text-green-500'>{user?.displayName}</span>  you have clicked below item</h1>
                        <h1 class="text-5xl font-bold">{part.name}</h1>
                        <p class="">price(per unite):${part.PricePerUnit}</p>
                        <p class="">{part.description}</p>
                        <p class="">Available Quantity:{part.AvailableQuantity}</p>
                        {/* input quantity */}
                        <h1>Quantity</h1>
                        <p>you have to order minimum {part.MinimumOrder} and maximum {part.AvailableQuantity}</p>
                        {/* <form onSubmit={handleInput}>
                            <input className='w-1/12 border-2 border-slate-500' type="number" id='' name='inputQuantity' placeholder='minimum 30 order' min={part.MinimumOrder}
                                max={part.AvailableQuantity}
                            />

                            <button disabled={disable} class="btn  btn-success ml-3">purchase</button>
                        </form> */}
                        <form onSubmit={handleSubmit(onSubmit)} className=' flex justify-center'>

                            <div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input value={user?.displayName} {...register("name", { required: true })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input value={user?.email} {...register("email", { required: true })} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Adress</span>
                                    </label>
                                    <input
                                        {...register("adress", {
                                            required: {
                                                value: true,
                                                message: 'adress is Required'
                                            },

                                        })}
                                        type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        {errors.adress?.type === 'required' && <span className="text-red-500">{errors.adress.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'phone number is Required'
                                            },

                                        })}
                                        type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="text-red-500">{errors.phone.message}</span>}
                                    </label>
                                </div>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Product Quantity</span>
                                    </label>
                                    <input
                                        {...register("productquantity", {
                                            required: {
                                                value: true,
                                                message: 'quantity is Required'
                                            },

                                            min: {
                                                value: part.MinimumOrder,
                                                message: `you have to order atleast ${part.MinimumOrder}` // JS only: <p>error message</p> TS only support string
                                            },
                                            max: {
                                                value: part.AvailableQuantity,
                                                message: `you cant order more than ${part.AvailableQuantity}` // JS only: <p>error message</p> TS only support string
                                            }
                                        })}
                                        type="number" placeholder="order minimum 30 piece" class="input input-bordered w-full max-w-xs" />
                                    <label className="label">
                                        {errors.productquantity?.type === 'required' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                        {errors.productquantity?.type === 'max' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                        {errors.productquantity?.type === 'min' && <span className="text-red-500">{errors.productquantity.message}</span>}
                                    </label>
                                </div>


                                {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
                                {/* <input type="submit" className='btn btn-active mt-3' value='purchase' /> */}
                                {errors.productquantity?.type === 'min' || errors.productquantity?.type === 'max' ? <input disabled={true} type="submit" className='btn btn-active mt-3' value='purchase' /> : <input type="submit" className='btn btn-active mt-3' value='purchase' />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Purchase;