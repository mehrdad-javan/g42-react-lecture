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

//const message = <h1>Hello React App</h1>
//ReactDOM.render(message, document.getElementById('root')  );


ReactDOM.render( <NameList />   ,    document.getElementById('root'));