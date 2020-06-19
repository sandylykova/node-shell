process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const pwd = process.cwd().toString().trim();

    process.stdout.write(pwd);
    process.stdout.write("\nprompt > ");
  } else {
    const cmd = data.toString().trim();

    process.stdout.write("You typed: " + cmd);
  }
  process.stdout.write("\nprompt > ");
});
