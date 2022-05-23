import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const handleProfile = (e) => {
        e.preventDefault()
        const profile = {
            name: user?.displayName,
            email: user?.email,
            education: e.target.education.value,
            location: e.target.location.value,
            phone: e.target.number.value,
            linkedin: e.target.linkedin.value,
        }
        fetch(`http://localhost:5000/myprofile/${user?.email}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1>MyProfile</h1>
            <form onSubmit={handleProfile}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>

                    </label>
                    <input value={user?.displayName} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>

                    </label>
                    <input value={user?.email} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Education</span>

                    </label>
                    <input name='education' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Location</span>

                    </label>
                    <input name='location' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">PhoneNumber</span>

                    </label>
                    <input name='number' type="number" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Linkedin Link</span>

                    </label>
                    <input name='linkedin' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input className='btn w-full max-w-xs mt-4' type="submit" value='submit' />
                </div>

            </form>
        </div>
    );
};

export default MyProfile;