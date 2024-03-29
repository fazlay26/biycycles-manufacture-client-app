import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            name: e.target.productname.value,
            img: e.target.productimg.value,
            description: e.target.description.value,
            MinimumOrder: e.target.MinimumOrder.value,
            AvailableQuantity: e.target.AvailableQuantity.value,
            PricePerUnit: e.target.PricePerUnit.value,
        }

        fetch('https://bicycles-manufacture-server.onrender.com/adminpost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('product addedded successfully ')
            })
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input name='productname' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Image</span>
                        </label>
                        <input name='productimg' type="input" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Description</span>
                        </label>
                        <input name='description' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Minimum Order</span>
                        </label>
                        <input name='MinimumOrder' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available Quantity</span>
                        </label>
                        <input name='AvailableQuantity' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price Per Unit</span>
                        </label>
                        <input name='PricePerUnit' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input className='btn mt-4' type="submit" value='ADD' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;