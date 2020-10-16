import React from 'react';
import { List } from './components'


const App =() => {

  let data = [
    {
        name: 'ModernOffice',
        value: 1
    },
    {
        name: 'Office',
        value: 0
      }
  ]

  const handleClick = (e, key) => {
    console.log(e);
    if (key === 'add') console.log("added");
    else return  console.log("remove");
  }

  return (
    <div className="App">
      <List data={data} handleClick={ (e, key) => handleClick(e, key) }/>
    </div>
  );
}

export default App;
