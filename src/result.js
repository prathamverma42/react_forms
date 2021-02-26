import React from 'react';

const Result = ({name,Class,roll}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{Class}</h2>
            <h3>{roll}</h3>
        </div>
    );
}
export default Result;