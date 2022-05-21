import React, { useEffect, useState } from 'react';
import PartCard from './PartCard';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-left textunder'>Featured Products</h1>
            <div className='md:flex space-x-2 justify-center '>
                {
                    parts.map(part => <PartCard
                        key={part._id}
                        part={part}
                    >

                    </PartCard>)
                }
            </div>

        </div>
    );
};

export default Parts;