import React from 'react'
import { Link } from 'react-router-dom'

function User({ user }) {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><a className="a-comp" href={user.website}>{user.website}</a></td>
            <td><button className="btn btn-outline-dark btn-sm">Edit</button></td>
            <td><Link className="btn btn-outline-success btn-sm" to={`/users/${user.id}`}>View</Link></td>
        </tr>
    )
}

export default User
