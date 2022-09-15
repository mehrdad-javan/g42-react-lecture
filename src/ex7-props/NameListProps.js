import React from 'react';


const getLastName = (name) => {
    let lastName = name.split(' ')[1];
    return <span>{lastName}</span>
}

const NameListProps = (props) => {

    return (

        <>
        <h1>{props.title}</h1>
        <ul>
            {
                props.names.map(name => (
                    <li key={name}>
                        {name}  -  {name.toUpperCase()} - {getLastName(name)}
                    </li>
                ))
            }
        </ul>
        </>
        
    );

};

export default NameListProps;