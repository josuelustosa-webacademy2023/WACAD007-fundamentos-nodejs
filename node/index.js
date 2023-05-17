const http = require("http");
const fs = require("fs");
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

console.log(folder)

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((f) => res.write(`${f} \n`));
      res.end("Instituto de Computação");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
