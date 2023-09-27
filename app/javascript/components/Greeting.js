import React, { useEffect, useState } from 'react';
// import React from 'react';
function Greeting() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the random greeting from your API endpoint
    fetch('/api/v1/greetings')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <h3>{message}</h3>
    </div>
  );
}

export default Greeting;
