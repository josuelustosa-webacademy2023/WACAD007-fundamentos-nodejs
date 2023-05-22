const http = require("http");
const fs = require("fs");
const until = require("./util.js");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req, res) => {
  const fileName = req.url;

  if (fileName === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    fs.readdir(folder, (err, files) => {
      if (err) console.log("Error: ", err);
      else {
        files.forEach((f) => res.write(`${until.createLink(f)}<br>`));
        res.end();
      }
    });
  } else {
    const filePath = path.join(folder, fileName);

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    fs.readFile(filePath, (err, data) => {
      if (err) console.log("Error: ", err);

      res.write(`
        ${until.createVoltar()} <br>
        <div>${data}</div>
      `);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
