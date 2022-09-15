//rsc
import React from 'react';
import Table from '../ex4-table/Table';

const StyleExample = () => {
    return (
        <div>
            <h3>Styling Using CSS</h3>
            <h4 style={{color: 'red'}}>List</h4>
            <hr/>
            <h5 style={{backgroundColor: 'lightblue'}}>Title</h5>
            <Table />
        </div>
    );
};

export default StyleExample;