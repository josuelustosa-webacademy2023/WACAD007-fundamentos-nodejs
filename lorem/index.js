import http from "http";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.write(`
    <h1>Olá mundo!!!</h1>
    <p>Seja bem-vindo(a) ao Gerador de Lorem Ipsum com NodeJS :)</p>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
