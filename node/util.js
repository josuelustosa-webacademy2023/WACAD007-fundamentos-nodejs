function toUpper(str) {
  return str.toUpperCase(str);
}

function createLink(filename) {
  return `<a href="/${filename}">${filename}</a>`;
}
function createVoltar() {
  return `<a href="/">Voltar</a>`;
}

module.exports = {
  toUpper,
  createLink,
  createVoltar
};
