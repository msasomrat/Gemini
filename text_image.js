const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs'); 
require('dotenv').config();



const genAI = new GoogleGenerativeAI(process.env.API_KEY);



function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}


async function run() {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });


  const prompt = "What's different between these pictures?";


  const imageParts = [
    fileToGenerativePart("cat.png", "image/png"),
    fileToGenerativePart("wolf.png", "image/png"),
  ];


  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}


run();

/* Output: The first picture is of a white cat sitting 
on a blue background. The second picture is of a wolf 
standing in the snow. The two pictures are different because
 the first picture is of a cat, while the second picture 
 is of a wolf. The cat is sitting on a blue background, 
 while the wolf is standing in the snow.
 */
