import React from 'react'

function Contact({ history }) {
    return (
        <div>
            <h1>Contact page</h1>
            <div className="buttons">
                <button onClick={() => history.goBack()}>Go back</button>
                <button onClick={() => history.goForward()}>Go farword</button>
                <button onClick={() => history.push('/service')}>To Service - Push</button>
                <button onClick={() => history.replace('/service')}>To Service - Replace</button>
            </div>

        </div>
    )
}

export default Contact
