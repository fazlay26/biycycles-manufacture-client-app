import React, { useEffect, useState } from 'react';
import PartCard from './PartCard';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://sheltered-meadow-37374.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-left textunder'>Featured Products</h1>
            <div className='md:flex space-x-2 justify-center '>
                <div className='  md:grid  grid-cols-3 gap-4'>
                    {
                        parts.map(part => <PartCard
                            key={part._id}
                            part={part}
                        >

                        </PartCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Parts;