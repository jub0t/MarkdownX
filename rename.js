const fs = require("fs");

Files = fs.readdirSync("./styles");
Files.forEach((File) => {
  fs.renameSync(`./styles/${File}`, `./styles/${File.replace(/prism-/gi, "")}`);
});
