const { spawn } = require('child_process');

const scripts = ['index.js', 'text_image_to_text.js', 'chatbot.js']; 

const processes = [];


scripts.forEach((script, index) => {
  console.log(`Starting instance ${index + 1} for ${script}`);
  const child = spawn('nodemon', [script]);

  child.stdout.on('data', (data) => {
    console.log(`Instance ${index + 1} (${script}): ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Instance ${index + 1} (${script}) error: ${data}`);
  });

  processes.push(child);
});

process.on('SIGINT', () => {
  processes.forEach((child) => {
    child.kill('SIGINT');
  });
});
