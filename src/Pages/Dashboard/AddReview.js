import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault()
        const review = {
            name: user?.displayName,
            ratings: e.target.ratings.value,
            review: e.target.review.value
        }
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>Please Add you Valuable FeedBack</h1>
            <form onSubmit={handleReview} className='flex justify-center'>
                <div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Ratings</span>
                        </label>
                        <input name='ratings' min='0' max='5' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Ratings</span>
                        </label>
                        <input name='review' min='0' max='5' type="text" placeholder="Enter Your FeedBack" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <input value='add' type="submit" placeholder="Enter Your FeedBack" class="btn w-full max-w-xs my-2" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;