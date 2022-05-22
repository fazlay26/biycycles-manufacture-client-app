import React from 'react';
import { Link } from 'react-router-dom';

const PartCard = ({ part }) => {
    const { _id, name, img, description, MinimumOrder, AvailableQuantity, PricePerUnit } = part
    return (
        <div class="card w-80  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-1/2' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Minimum Order:{MinimumOrder}</p>
                <p>Available Quantity:{AvailableQuantity}</p>
                <p>Price(per unite):{PricePerUnit}</p>
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`}><button class="btn btn-primary">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PartCard;