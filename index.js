const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);



async function run(){
    const model = genAI.getGenerativeModel({model: "gemini-pro"});
    const chat = model.startChat({
        history:[
            {
                role: "user",
                parts: "Hello, How are you? I have two Cats in my house ",
            },
            {
                role: "model",
                parts:"I'm good. Nice to meet you. What would like to know?",
            },
        ],
        generationConfig:{
            maxOutputTokens: 1000,
        },
    });

    const msg = "Do you love cats more than dogs? But I like cat. you should also. How many soft paw in my house?";

    const result = await chat.sendMessage(msg);

    const response = await result.response;
    const text = response.text();
    console.log(text);
}
run();