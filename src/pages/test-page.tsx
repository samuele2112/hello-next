import React from 'react';
import axios from 'axios';

function TestPage() {

  function doSomething() {
    axios.post('/api/hello', { text: 'I am Fabio'})
      .then(res => {
        console.log(res)
      })
  }

  return (
    <>
      <h1 className="title">Hello API Routes</h1>
      <button onClick={doSomething}>CALL API</button>
    </>
  )
}

export default TestPage;