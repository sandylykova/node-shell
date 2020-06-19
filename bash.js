const pwdFunc = require("./pwd");
const lsFunc = require("./ls");

process.stdout.write("prompt > ");

// process.stdout.write("prompt > ");
// const bashFunc = () => {
//   process.stdin.on("data", (data) => {
//     const cmd = data.toString().trim();

//     if (cmd !== "pwd" || cmd !== "ls") {
//       process.stdin.on("data", (data) => {
//         process.stdout.write("You typed: " + cmd);
//         process.stdout.write("\nprompt > ");
//       });
//     } else if (cmd == "pwd") {
//       pwdFunc();
//     } else if (cmd == "ls") {
//       lsFunc();
//     }
//   });
// };

pwdFunc();
lsFunc();
