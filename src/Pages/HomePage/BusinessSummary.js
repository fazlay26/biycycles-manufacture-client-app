import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Millions Business Trust Us</h1>
            <div className=' ml-20 md:flex justify-center items-center'>
                <div className='md:grid grid-rows-1 grid-flow-col my-10 '>
                    <div className='w-2/12 h-1/12'>
                        <img src="https://cdn-icons.flaticon.com/png/512/473/premium/473642.png?token=exp=1653150293~hmac=58e4cc97a2ec79706521f87856d36821" alt="" />

                        <h1>72</h1>
                        <h1>Countries</h1>

                    </div>
                    <div className='w-2/12 h-1/12'>
                        <img src="https://cdn-icons.flaticon.com/png/512/3051/premium/3051633.png?token=exp=1653151690~hmac=74a31076b582f5114902c88e9cf97b05" alt="" />

                        <h1>535+</h1>
                        <h1>Complete Projects</h1>

                    </div>
                    <div className='w-2/12 h-1/12'>
                        <img src="https://cdn-icons.flaticon.com/png/512/3369/premium/3369157.png?token=exp=1653151735~hmac=e3de4e50821105cd3fbf7b16f1dc2a32" alt="" />

                        <h1>250+</h1>
                        <h1>Happy Clients</h1>

                    </div>
                    <div className='w-2/12 h-1/12'>
                        <img src="https://cdn-icons.flaticon.com/png/512/3202/premium/3202727.png?token=exp=1653151781~hmac=6063a3b773045a27df693ab5dc9e24cb" alt="" />

                        <h1>432+</h1>
                        <h1>FeedBacks</h1>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;