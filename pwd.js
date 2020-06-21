const pwdFunc = () => {
  const pwd = process.cwd().toString().trim();

  process.stdout.write(pwd);
  process.stdout.write("\nprompt > ");
};

module.exports = pwdFunc;
