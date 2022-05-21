import React from 'react';
import './ExtraSection2.css'

const ExtraSection2 = () => {
    return (
        <div class="flex w-fit mx-auto my-10">
            <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center image-box">
                <img src="https://prestashoptheme.in/prs/PRS713/modules/ttsubbanner/views/img/banner-1.jpg" alt="" />

            </div>
            {/* <div class="divider divider-horizontal">OR</div> */}
            <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center image-box">
                <img src="https://prestashoptheme.in/prs/PRS713/modules/ttsubbanner/views/img/banner-2.jpg" alt="" />

            </div>
        </div>
    );
};

export default ExtraSection2;