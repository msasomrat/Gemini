const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI, GoogleGenerativeAIError } = require('@google/generative-ai');

const app = express();
const PORT = 8000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

require('dotenv').config();

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error('API_KEY is missing in environment variables.');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

app.post('/gemini', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const chat = model.startChat({
      history: req.body.history
    });
    const msg = req.body.message;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    res.send(response);
  } catch (error) {
    if (error instanceof GoogleGenerativeAIError) {
      console.error(`Google Generative AI Error: ${error.message}`);
      res.status(500).send('Google Generative AI Error');
    } else {
      console.error('Internal Server Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
