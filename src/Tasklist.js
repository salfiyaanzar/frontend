import React, {useState, useEffect} from 'react';
import {getTasks} from './services';
import {Link} from 'react-router-dom';



const Tasklist = () => {
    const [list, setList] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTasks()
            .then(items => {
                if (items) {
                    setList(items);  // Set the list if items is not undefined
                } else {
                    setList([]);  // If items is undefined or null, set an empty array
                }
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load tasks');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(list) && list.length > 0 ? (
                            list.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status}</td>
                                    <td><Link to={`/tasks/${item.id}`}>Edit</Link></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No tasks available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
};

export default Tasklist;