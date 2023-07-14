document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
  const inputField = copyLinkParent.querySelector(".copy-link-input");
  const copyButton = copyLinkParent.querySelector(".copy-link-button");

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    let text = inputField.value; // Obtener el valor en el momento de la copia
    inputField.select();
    inputField.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(text);
  });
});

const copyAllButton = document.querySelector(".btn-solid-lg");

copyAllButton.addEventListener("click", () => {
  let copiedText = "";

  document.querySelectorAll(".containerInput").forEach((containerInput) => {
    const titleElement = containerInput.querySelector(".title");
    const inputField = containerInput.querySelector(".copy-link-input");

    const title = titleElement.childNodes[2].nodeValue.trim();
    const value = inputField.value;

    copiedText += `${title} ${value}\n`;
  });

  navigator.clipboard.writeText(copiedText);
});