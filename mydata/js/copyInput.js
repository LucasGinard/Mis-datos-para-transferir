document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
      inputField.select();
      inputField.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(text);
    });
  });

const copyAllButton = document.querySelector(".btn-solid-lg");

copyAllButton.addEventListener("click", () => {
  let copiedText = "";

  document.querySelectorAll(".containerInput").forEach((containerInput) => {
    const titleElement = containerInput.querySelector(".title");
    const inputField = containerInput.querySelector(".copy-link-input");

    const title = titleElement.textContent.trim();
    const value = inputField.value;

    copiedText += `${title} ${value}\n`;
  });

  navigator.clipboard.writeText(copiedText);
});