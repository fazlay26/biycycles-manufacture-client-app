import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl font-bold mb-5 text-left textunder'>Millions Business Trust Us</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
                <div class="stat">
                    <div class="stat-title">Customers</div>
                    <div class="stat-value text-green-500">100+</div>

                </div>

                <div class="stat">
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value">120+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value text-green-500">33K+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div class="stat">
                    <div class="stat-title">tools</div>
                    <div class="stat-value">50+</div>

                </div>

            </div>


        </div>
    );
};

export default BusinessSummary;