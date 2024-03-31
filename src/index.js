import * as React from "react";
import * as ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BigList from './BigList';

const rootNode =document.getElementById('root')
// ReactDOM.render(<App />, rootNode);


// ReactDOM.render(<BigList />, rootNode);
ReactDOM.createRoot(rootNode).render(<BigList />)