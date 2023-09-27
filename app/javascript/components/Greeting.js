import React, { useEffect, useState } from 'react';
// import React from 'react';
function Greeting() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the random greeting from your API endpoint
    fetch('/random_greeting')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;