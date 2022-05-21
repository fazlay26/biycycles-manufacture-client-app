import React from 'react';
import SingleReview from './SingleReview';



const Reviews = () => {

    return (
        <div>
            <h1 className='text-4xl font-bold text-left textunder'>What Our Patients Says</h1>
            <div className="my-10 md:flex flex-col w-full lg:flex-row">
                <div className="hidden md:grid flex-grow block w-full  card bg-base-300  place-items-center">
                    <SingleReview></SingleReview>
                </div>
                {/* <div className="divider lg:divider-horizontal">OR</div> */}
                {/* <div className=" md:grid flex-grow w-1/3  card bg-base-300 rounded-box  place-items-center">
                    <img src="https://prestashoptheme.in/prs/PRS713/modules/tt_bannerslider/views/img/banner1.jpg" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Reviews;