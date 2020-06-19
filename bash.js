process.stdout.write("prompt >");

// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write("You typed:" + cmd);
//   process.stdout.write("\nprompt >");
// });

process.stdin.on("data", (data) => {
  if (data === "pwd") {
    const cmd = process.cwd().toString().trim();

    process.stdout.write(cmd);
    process.stdout.write("\nprompt >");
  } else {
    const cmd = data.toString().trim();

    process.stdout.write("You typed:" + cmd);
    process.stdout.write("\nprompt >");
  }
});
