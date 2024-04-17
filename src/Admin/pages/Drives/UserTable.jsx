import React from 'react';

function UserTable({ users }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Full Name</th>
                    <th>Avatar</th>
                    {/* Add more headers for other user details if needed */}
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user?._id}>
                        <td>{user?.userName}</td>
                        <td>{user?.email}</td>
                        <td>{user?.fullName}</td>
                        <td>
                            <img src={user?.avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} />
                        </td>
                        {/* Add more table data cells for other user details if needed */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
