import React from 'react';


const names = ['Mehrdad Javan', 'Simon Elbrink'];

const getLastName = (name) => {
    let lastName = name.split(' ')[1];
    return <span>{lastName}</span>
}

const NameList = () => {

    return (
        <ul>
            {
                names.map(name => (
                    <li key={name}>
                        {name}  -  {name.toUpperCase()} - {getLastName(name)}
                    </li>
                ))
            }
        </ul>
    );

};

export default NameList;