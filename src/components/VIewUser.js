import React, { useEffect, useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

function VIewUser({ match: { params: { id } } }) {
    // const match = useRouteMatch()
    // const {id} = useParams()

    const [userData, setUserData] = useState([])

    useEffect(() => {
        const promise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        promise.then((res) => res.json())
            .then((user) => {
                setUserData(user)
            })
    }, [id])
    return (
        <h1>View User - {userData.name}</h1>
    )
}

export default VIewUser
