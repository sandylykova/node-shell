
const pwdFunc = () => {

  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      const pwd = process.cwd().toString().trim();

      process.stdout.write(pwd);
    }

    process.stdout.write("\nprompt > ");
  });
};

module.exports = pwdFunc;
