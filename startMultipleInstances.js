const { spawn } = require('child_process');

const numInstances = 3; // Number of instances to run concurrently

// Create an array to store the spawned processes
const processes = [];

// Start multiple instances
for (let i = 0; i < numInstances; i++) {
  console.log(`Starting instance ${i + 1}`);
  const child = spawn('nodemon', ['index.js']);

  child.stdout.on('data', (data) => {
    console.log(`Instance ${i + 1}: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`Instance ${i + 1} error: ${data}`);
  });

  processes.push(child);
}

// Handle process exit
process.on('SIGINT', () => {
  processes.forEach((child) => {
    child.kill('SIGINT');
  });
});
