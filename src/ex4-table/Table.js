import React from 'react';
//import './table.css';

const TableHeader = () => {
    return ( <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>);
}

const TableAction = () => {
    return (
        <>
            <button type='button' className='btn btn-primary' >Details</button>
            <button type='button' className='btn btn-danger' >Delete</button>
            <button type='button' className='btn btn-warning'>Edit</button>
        </>
     
    )
}

const TableRow = () => {
    return(<tbody>
        <tr>
            <td>1</td>
            <td>Mehrdad Javan</td>
            <td>mehrdad.javan@lexicon.se</td>
            <td>
               <TableAction />
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Simon Elbrink</td>
            <td>simon.elbrink@lexicon.se</td>
            <td>
                <TableAction />
            </td>
        </tr>
    </tbody>);
}

const Table = () => {
    return (
        <div>
            <table className='table table-dark' border='1'>
               <TableHeader />
               <TableRow />
                
            </table>
        </div>
    );
};

export default Table;