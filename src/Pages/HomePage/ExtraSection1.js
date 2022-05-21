import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='image-box'>
                    <img src="https://prestashoptheme.in/prs/PRS713/img/cms/about-images.jpg" alt='' className="sm:w-80  md:w-fit rounded-lg shadow-2xl bg-base-200 " />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Best Adventure <br /> Tourer Bikes</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <div className="avatar mr-4 ">
                        <div className="w-24 rounded-xl">
                            <img src="https://prestashoptheme.in/prs/PRS713/img/cms/about-1.jpg" alt='' />
                        </div>
                    </div>
                    <div className="avatar mr-4 ">
                        <div className="w-24 rounded-xl">
                            <img src="https://prestashoptheme.in/prs/PRS713/img/cms/about-2.jpg" alt='' />
                        </div>
                    </div>
                    <div className="avatar mr-4 ">
                        <div className="w-24 rounded-xl">
                            <img src="https://prestashoptheme.in/prs/PRS713/img/cms/about-3.jpg" alt='' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;