import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import User from '../components/User'

function Users({ history, location }) {
    // const history = useHistory()
    // const location = useLocation()

    const [users, setUsers] = useState([])
    const search = new URLSearchParams(location.search)
    const count = parseInt(search.get("count"))

    useEffect(() => {
        const res = fetch("https://jsonplaceholder.typicode.com/users")
        res.then((data) => data.json())
            .then((users) => {
                setUsers(users)
                if (count && !isNaN(count)) {
                    users.length = count
                }
            })
            .catch((error) => console.log(error))
    }, [])
    return (
        <div>
            <h1>Users Page</h1>
            <div className="buttons">
                <button onClick={() => history.goBack()}>Go back</button>
                <button onClick={() => history.goForward()}>Go farword</button>
                <button onClick={() => history.push('/service')}>To service - Push</button>
                <button onClick={() => history.replace('/service')}>To service - Replace</button>
            </div>

            <div>
                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Edit User</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => {
                                return <User key={i} user={user} />
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Users
