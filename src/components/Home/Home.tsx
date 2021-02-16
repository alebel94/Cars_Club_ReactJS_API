import React from 'react';
// TODO: Add Bootstrap here

export const Home = (props:any) => {
    // return needed for valid react code
    return (
        <div>
            <h1>Hello from Octane Car Club!</h1>
            <h4>{ props.title }</h4>
        </div>
    )
}