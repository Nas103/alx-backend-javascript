process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Get user input and trim whitespace
  process.stdout.write(`Your name is: ${name}\n`);
  
  // End the process gracefully after handling the input
  process.stdin.end();
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
