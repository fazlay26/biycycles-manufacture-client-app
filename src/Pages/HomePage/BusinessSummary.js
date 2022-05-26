import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl font-bold mb-5 text-left textunder'>Millions Business Trust Us</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
                <div class="stat">
                    <div class="stat-figure text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-title">Customers</div>
                    <div class="stat-value text-green-500">100+</div>

                </div>

                <div class="stat">
                    <div class="stat-title">Annual revenue</div>
                    <div class="stat-value">120+</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
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