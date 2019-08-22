const copyBox = document.querySelector(".text-to-copy");
const codeInput = document.querySelector(".input-field");
const createButton = document.querySelector(".create-button");
const explainLink = document.querySelector(".explain-link");

explainLink.style.display = 'none';

const createCode = () => {
  const hash = window.location.hash;
  if(hash) {
    const encodedText = decodeURIComponent(hash.slice(1));
    const text = atob(encodedText);
    copyBox.textContent = text;
    explainLink.setAttribute('href', `https://explainshell.com/explain?cmd=${encodeURIComponent(text)}`)
    explainLink.style.display = 'block';
    console.log(explainLink);
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
