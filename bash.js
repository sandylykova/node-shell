

const pwdFunc  = require('./pwd');
const lsFunc = require('./ls')
pwdFunc();
lsFunc();

const bashFunc = () => {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd !== "pwd" || cmd !== 'ls') {
      process.stdout.write("\nprompt > ");
      process.stdin.on("data", (data) => {
        process.stdout.write("You typed: " + cmd);
        process.stdout.write('\nprompt > ');
    });
  }
})
