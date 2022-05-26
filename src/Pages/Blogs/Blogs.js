import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-2 border-green-600 m-5'>
                <h1 className='font-bold'>Q1:How will you improve the performance of a React Application?</h1>
                <p>ans:firstly i have to know how my components interected ,When considering optimizing the application bundle size, its worth checking how much code i am actually utilizing from dependencies.always have to Avoid Inline Function Definition in the Render Function.Avoid using Index as Key for map because using the key as the index can show your app incorrect data as it is being used to identify DOM elements.Therefore there are lot of way to improve my react application</p>
            </div>
        </div>
    );
};

export default Blogs;