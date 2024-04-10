const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);



async function run(){
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "Write a story about school bunk."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
run();



/* Output: 
In the bustling halls of Willow Creek High, a clandestine plot was brewing. A group of restless teenagers, led by the mischievous Ethan and his cunning accomplice Emily, were planning an audacious escape from the confines of their classrooms.

As the first bell rang, Ethan and Emily discreetly slipped out of the English classroom, their hearts pounding with anticipation. They were swiftly joined by their fellow conspirators, the bookworm Amelia, the athletic Jake, and the ever-optimistic Sophia.

With the watchful eyes of teachers and administrators lurking around every corner, the group navigated the school with feline agility. They deftly avoided the dreaded "hall monitors" and slipped past the creaking doors of the library, their sanctuary for the next few hours.      

Inside the dimly lit library, Ethan and Emily swiftly set up a makeshift camp. They spread out blankets on the carpet and gathered books and laptops for sustenance. As they settled in, laughter and hushed whispers filled the air.

Amelia immersed herself in a thrilling fantasy novel, oblivious to the world around her. Jake engaged in a heated video game battle, his fingers flying across the keyboard. Sophia shared her infectious enthusiasm with Emily, regaling her with tales of her latest adventures.      

Hours flew by as the group reveled in their newfound freedom. The pressure of exams and homework melted away, replaced by a sense of camaraderie and stolen moments. They shared jokes, gossiped about their classmates, and simply enjoyed the simple pleasures of being young and unburdened.

However, their blissful escape was not destined to last forever. As the sun began to set, casting long shadows across the library, the dreaded sound of footsteps approached. A stern-faced teacher, Mrs. Hawthorne, appeared in the doorway, her eyes scanning the room.

With lightning speed, the group scrambled to their feet and shoved their books and blankets under tables. They froze in place, their hearts racing in their chests. Mrs. Hawthorne's gaze lingered on them for a moment, but she seemed to dismiss them as just another group of students studying quietly.

Heart pounding in their ears, Ethan and his friends waited breathlessly until Mrs. Hawthorne disappeared down the corridor. They erupted into a chorus of relieved laughter, celebrating their narrow escape.     

As the sky darkened, it was time for the group to return. They made their way back to their respective classrooms, their faces flushed with excitement. They had successfully pulled off a school bunk, an experience they would cherish for years to come.

From that day forward, Ethan, Emily, Amelia, Jake, and Sophia became known as the "Library Lunch Bunch," a group of friends united by their shared adventure and unwavering bond. And though they had to return to the rigors of school life, they never forgot the intoxicating taste of freedom they had experienced on that stolen afternoon.
*/