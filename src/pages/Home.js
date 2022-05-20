import React from 'react'

function Home({ history }) {
    return (
        <div>
            <h1>Home page</h1>
            <div className="buttons">
                <button onClick={() => history.goBack()}>Go back</button>
                <button onClick={() => history.goForward()}>Go farword</button>
                <button onClick={() => history.push('/about')}>To About - Push</button>
                <button onClick={() => history.replace('/about')}>To About - Replace</button>
            </div>
        </div>
    )
}

export default Home
