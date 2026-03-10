const { spawn } = require('child_process');
const http = require('http');

// Start Vite dev server
const vite = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
});

// Wait for port 5173 to be listening
function waitForServer(port, maxRetries = 30, interval = 100) {
  let retries = 0;

  const checkServer = () => {
    retries++;
    const req = http.get(`http://127.0.0.1:${port}`, (res) => {
      if (res.statusCode === 200 || res.statusCode === 404) {
        // Server is listening
        console.log(`✓ Vite is ready on port ${port}`);
        process.exit(0);
      }
    });

    req.on('error', () => {
      if (retries >= maxRetries) {
        console.error(`✗ Failed to reach Vite on port ${port} after ${maxRetries * interval}ms`);
        vite.kill();
        process.exit(1);
      }
      setTimeout(checkServer, interval);
    });
  };

  checkServer();
}

waitForServer(5173);

// Handle cleanup
process.on('SIGINT', () => {
  vite.kill();
  process.exit(0);
});
