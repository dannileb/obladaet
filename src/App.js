import React from 'react';


function Table() {
    const arr = [1, 2, 3, 4, 5];
    let html = [];
    for(let el of arr){
        html.push(<li>{el}</li>)
    }
    return (
        <ul>
            {html}
        </ul>
    );
}

function App() {
  return(
      <div>
          <Table></Table>
      </div>
  )
}

export default App;