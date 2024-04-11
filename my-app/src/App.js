import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOption = [
    'Who won the latest Nobel Peace Prize?',
    'Where does pizza come from?',
    'How to make a sandwich?'
  ];

  const getResponse = async () => {
    if (!value) {
      setError('Error! Ask anything.');
      return;
    }
  
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
  
      // Use the correct backend URL (http://localhost:8000/gemini)
      const response = await fetch('http://localhost:8000/gemini', options);
      const data = await response.text(); // Parse response as text
      console.log(data);

      // Update chat history with the user's message and the model's response
      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { role: 'user', parts: value },
        { role: 'model', parts: data }
      ]);

      // Clear any previous error and update the value state
      setError('');
      setValue('');

    } catch (error) {
      console.error(error);
      setError('Something went wrong!');
    }
  };

  const clear = () => {
    setValue('');
    setError('');
    setChatHistory([]);
  };

  const surprise = () => {
    const randomValue = surpriseOption[Math.floor(Math.random() * surpriseOption.length)];
    setValue(randomValue); // Set the value state to the randomly selected option
  };

  return (
    <div className="app">
      <p>
        What do you want to know?
        <button className="surprise" onClick={surprise} disabled={chatHistory.length === 0}>
          Surprise me!
        </button>
      </p>

      <div className="input-container">
        <input
          value={value}
          placeholder="Ask a question..."
          onChange={(e) => setValue(e.target.value)}
        />
        {!error && <button onClick={getResponse}>Ask me</button>}
        {error && <button onClick={clear}>Clear</button>}
      </div>

      {error && <p>{error}</p>}

      <div className="search-result">
        {chatHistory.map((chatItem, index) => (
          <div key={index}>
            <p className="answer">
              {chatItem.role}: {chatItem.parts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
