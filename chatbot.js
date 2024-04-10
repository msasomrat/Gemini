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


    const msg = "Do you love cats? Benefits of cat over dog. How many soft paws in my house";


    const result = await chat.sendMessage(msg);


    const response = await result.response;
    const text = response.text();
    console.log(text);
}
run();


/*
Output: 

1. **Yes, I love cats.** They are playful, affectionate, and independent creatures. I enjoy their company and find them to be great pets.   
2. **Benefits of cats over dogs:**
    * **Lower maintenance:** Cats are generally lower maintenance than dogs. They don't need to be walked or taken outside 
            to use the bathroom. They also groom themselves, so you don't have to brush them as often.
    * **More independent:** Cats are more independent than dogs. They can be left alone for longer periods of time without getting anxious or destructive.
    * **Quieter:** Cats are generally quieter than dogs. They don't bark or howl, and they are less likely to cause disturbances.
    * **Smaller:** Cats are smaller than dogs, which makes them ideal for people who live in apartments or have limited space.
3. **You have two soft paws in your house.**
*/