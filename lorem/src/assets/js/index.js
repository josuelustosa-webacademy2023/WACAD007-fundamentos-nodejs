function generateParagraph() {
  const numberParagraph = parseInt(
    document.getElementById("input-paragraph").value
  );
  const paragraphContainer = document.getElementById("container-paragraph");
  paragraphContainer.innerHTML = "";

  let paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan velit non justo cursus finibus. Quisque ac mauris placerat, euismod metus a, semper nisi. Fusce bibendum, sem nec dapibus fringilla, nunc ante fringilla urna, vel tempus massa massa sed turpis. Sed ut pulvinar risus. Quisque maximus lorem et mollis eleifend. Aenean nec tempus sapien, nec ornare libero. Praesent tempus est id neque volutpat, vitae mattis risus placerat. Quisque aliquam ullamcorper convallis.";

  if (numberParagraph <= 0 || numberParagraph > 120) {
    alert("O número de parágrafo deve ser maior que 0 e até 120.");
  } else {
    for (let i = 0; i < numberParagraph; i++) {
      let paragraphElement = document.createElement("p");
      paragraphElement.textContent = paragraph;
      paragraphContainer.appendChild(paragraphElement);
    }
  }
}
