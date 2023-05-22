const http = require("http");
const fs = require("fs");
const path = require("path");
const until = require("./util.js");

require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    fs.readdir(folder, (err, files) => {
      if (err) console.log("CONSOLE FILES ", err);
      else {
        files.forEach((f) => res.write(`${until.createLink(f)}<br>`));
        res.end("<br>Instituto de Computação");
      }
    });
  } else {
    const fileName = decodeURIComponent(req.url.substring(6)); // Decodifica o nome do arquivo
    const filePath = path.join(folder, fileName);

    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    fs.readFile(filePath, (err, data) => {
      if (err) console.log("CONSOLE DATA ", data);

      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
