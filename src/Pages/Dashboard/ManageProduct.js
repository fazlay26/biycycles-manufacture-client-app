import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageProductDelete from './ManageProductDelete';

const ManageProduct = () => {
    // const [parts, setParts] = useState([])
    // useEffect(() => {
    //     fetch('https://bicycles-manufacture-server.onrender.com/part')
    //         .then(res => res.json())
    //         .then(data => setParts(data))
    // }, [])
    const [deletingPart, setDeletingPart] = useState(null)

    const { isLoading, data: parts, refetch } = useQuery('part', () =>
        fetch('https://bicycles-manufacture-server.onrender.com/part').then(res =>
            res.json()
        )
    )



    if (isLoading) return 'Loading...'
    return (
        <div>
            <h1>ManageProduct{parts.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <ManageProductDelete
                                key={part._id}
                                part={part}
                                index={index}
                                setDeletingPart={setDeletingPart}
                            >
                            </ManageProductDelete>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingPart && <DeleteConfirmModal deletingPart={deletingPart} refetch={refetch} setDeletingPart={setDeletingPart}></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageProduct;