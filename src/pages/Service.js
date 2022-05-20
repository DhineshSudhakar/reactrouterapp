import React from 'react'

function Service({ history }) {
    return (
        <div>
            <h1>Services page</h1>
            <div className="buttons">
                <button onClick={() => history.goBack()}>Go back</button>
                <button onClick={() => history.goForward()}>Go farword</button>
                <button onClick={() => history.push('/users')}>To Users - Push</button>
                <button onClick={() => history.replace('/users')}>To Users - Replace</button>
            </div>

        </div>

    )
}

export default Service
