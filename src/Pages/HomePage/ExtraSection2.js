import React from 'react';
import './ExtraSection2.css'

const ExtraSection2 = () => {
    return (
        <div className="flex w-fit mx-auto my-10">
            <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center image-box">
                <img src="https://prestashoptheme.in/prs/PRS713/modules/ttsubbanner/views/img/banner-1.jpg" alt="" />

            </div>
            {/* <div className="divider divider-horizontal">OR</div> */}
            <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center image-box">
                <img src="https://prestashoptheme.in/prs/PRS713/modules/ttsubbanner/views/img/banner-2.jpg" alt="" />

            </div>
        </div>
    );
};

export default ExtraSection2;