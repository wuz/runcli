const copyBox = document.querySelector(".text-to-copy");
const codeInput = document.querySelector(".input-field");
const createButton = document.querySelector(".create-button");

const createCode = () => {
  const hash = window.location.hash;
  if(hash) {
    const encodedText = decodeURIComponent(hash.slice(1));
    const text = atob(encodedText);
    copyBox.textContent = text;
  }
};

createButton.addEventListener('click', () => {
  const text = codeInput.value.trim();
  const encoded = encodeURIComponent(btoa(text));
  console.log(encoded);
  window.location.hash = encoded;
  createCode();
});

createCode();
