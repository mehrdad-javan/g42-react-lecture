import React from 'react';

const MenuLink = (props) => {
    return(<a style={{color: 'gray', fontSize: '22px'}} target='_blank' href={props.link.url}>{props.link.name}</a>)
}

const MenuList = (props) => {
    return (
        <div>
            {
                props.links.map(element => {
                    return (
                    <ul>
                        <li key={element.id}><MenuLink link={element} /></li>
                    </ul>
                    )
                })
            }
        </div>
    );
};

export default MenuList;