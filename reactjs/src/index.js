import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const express = require("express");
// require("dotenv").config();
// const {Configuration, OpenAIApi} = require("openai");
// const app = express();
// const readLine = require("readLine");
// app.use(express.json())

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY,
// });
// const openai =  new OpenAIApi(configuration); 

// const userInterface = readLine.createInterface({
//   input:process.stdin,
//   output:process.stdout,
// })

// userInterface.prompt();

// const history = [];

// userInterface.on("line", async (line) => {
//   history.push({ role: "user", content: line });
//   const response = await openai.createChatCompletion({
//     model: "gpt-3.0",
//     messages: history,
//   });

//   console.log(response.data.choices[0].message.content);
//   userInterface.prompt();
// });


// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log('Server listening on port ${port}'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
