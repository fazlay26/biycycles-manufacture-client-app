import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-green-500'>My Top 3 Projects</h1>
            <div className='grid mt-5 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2 xl:grid-cols-4 '>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fazlay Rabbi</h2>
                        <h2 class="card-title">rabboi007@gmail.com</h2>
                        <p>Narayanganj,Bangladesh</p>
                        <p>Bsc in CSE</p>
                        <h1>
                            My  Skills:
                            <li>Frontend:HTML5,CSS3,Javascript,
                                ReactJs,Bootstrap,Tailwind,DaisyUi
                                ,React Bootstrap.</li>
                            <li>Backend:NodeJs,MongoDb,
                                ExpressJs.</li>
                            <li>Familiar:Context Api,java,C, Rest
                                Api,React Hook Forms</li>
                            <li>Tools:Git, Github, VS Code,
                                Chrome Dev Tool,Firebase, Heroku,
                                Figma, Netlify,React Router</li>
                        </h1>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/7kHS98C/Screenshot-136.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://gym-trainer-7746e.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/XjbXydM/Screenshot-137.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://bike-manager-4766c.web.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/kHwGN7L/Screenshot-139.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <a href="https://product-review-site.netlify.app/" target="_blank"><button class="btn btn-accent btn-outline">Live Site</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;