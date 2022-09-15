import ReactDOM from 'react-dom';

// import the bootsrap resource
import "bootstrap/dist/css/bootstrap.css";

import App from './ex1-class-component/App';
import FirstClassComponent from './ex1-class-component/FirstClassComponent';
import HeaderClassComponent from './ex1-class-component/HeaderClassComponent';
import Main from './ex2-function-component/Main';
import AFMain from './ex3-arrow-function-component/AFMain';
import Table from './ex4-table/Table';
import StyleExample from './ex5-styling/StyleExample';
import NameList from './ex6-variable-function/NameList';
import NameListProps from './ex7-props/NameListProps';
import MenuList from './ex7-props/MenuList';
import Car from './ex8-state/Car';
import Product from './ex8-state/Product';

//const message = <h1>Hello React App</h1>
//ReactDOM.render(message, document.getElementById('root')  );

const list = ['Mehrdad Javan', 'Simon Elbrink', 'Test test'];
//ReactDOM.render( <NameListProps names={list} title='Teacher List' />   ,    document.getElementById('root'));
const links = [
    {id:1 , name: 'lexicon', url: 'https://www.lexicon.se'},
    {id:2 , name: 'Oracle', url: 'https://www.oracle.com'},
    {id:3 , name: 'Google', url: 'https://www.google.com'}
];
//ReactDOM.render( <MenuList links={links} />   ,    document.getElementById('root'));

//const product = {id: 1, image: 'oca.jpg', name: 'OCA', price: 50.00, description: 'Oracle Certified Assosiation STUDY GUYDE!'};
ReactDOM.render( <Product id={2} /> ,   document.getElementById('root'))