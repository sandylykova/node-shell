
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
      const cmd = data.toString().trim();
      if (cmd === "pwd") {
        const pwdFunc = require("./pwd");
      } else if (cmd === "ls") {
        const lsFunc = require("./ls");
      } else if (cmd.slice(0, 3) === "cat") {
        const cat = require('./cat')
      }
    });


// pwdFunc();
// lsFunc();
