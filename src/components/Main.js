import React from 'react'

function MainContainer(props) {
    const { children } = props;

    return (
        <div className='container-fluid'>
            { children }
        </div>
    )
}

export default MainContainer;