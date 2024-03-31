import * as React from 'react';
import * as ReactDOM from "react-dom";

const BigList = () => {
    const list = new Array(3000).fill(0)
  return (
    <ul>
        {
            list.map((_, i) => <li>{i}</li>)
        }
    </ul>
  )
}

export default BigList;