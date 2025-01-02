// import React, { useState } from "react";
// import { Link } from 'react-router-dom';

// function User() {
//     const [users, setUsers] = useState([])
//     useEffect(() => {
//     axios.get('http://localhost:3001')
//         .then(result=>setUsers(result.data))
//         .catch(err => console.log(err))

//  },[])

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className='w-50 bg-white rounded p-3'>
//                 <Link to="/create" className='btn btn-success d-flex justify-content-start w-25'>Add +</Link>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Age</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user) => (
//                                 <tr key={user.Email}>
//                                     <td>{user.Name}</td>
//                                     <td>{user.Email}</td>
//                                     <td>{user.Age}</td>
//                                     <td className="d-flex gap-3">
//                                         <Link to="/update" className='btn btn-success'>Update</Link>
//                                         <button className="btn btn-danger">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default User;


import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import axios from "axios"; // Ensure axios is imported
import { Link } from "react-router-dom";

function User() {
    const [users, setUsers] = useState([]); // Initialize the state

    useEffect(() => {
        // Fetch data from the backend
        axios
            .get("http://localhost:3001") // Ensure the backend is running
            .then((result) => setUsers(result.data))
            .catch((err) => console.error("Error fetching data:", err)); // Log errors properly
    }, []);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success d-flex justify-content-start w-25">
                    Add +
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.Email}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td className="d-flex gap-3">
                                    <Link to={`/update/${user.Email}`} className="btn btn-success">
                                        Update
                                    </Link>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
