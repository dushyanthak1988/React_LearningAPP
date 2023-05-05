import React, { useState, useEffect } from 'react';

function LoadajaxCall () {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
       <h1>Ajax call data</h1>
        <hr/>

        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    );
     
}

export default LoadajaxCall;