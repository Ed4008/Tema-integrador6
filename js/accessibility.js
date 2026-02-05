function lerPagina() {
  const texto = document.body.innerText;
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "pt-BR";
  speechSynthesis.speak(voz);
}
