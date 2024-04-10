const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    try {
        
        
        const model = genAI.getGenerativeModel({ model: "embedding-001" });

        const text = "The quick brown fox jumped over the lazy car";

        const result = await model.embedContent(text);

        const embedding = result.embedding;
        console.log("Embedding:");
        console.log(embedding);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

run();
