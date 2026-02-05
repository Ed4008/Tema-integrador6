fetch("data/pesquisa.json")
  .then(response => response.json())
  .then(data => {
    const canvas = document.getElementById("grafico");
    const ctx = canvas.getContext("2d");

    let x = 50;
    for (let item in data.barreiras) {
      let altura = data.barreiras[item];
      ctx.fillRect(x, 200 - altura, 40, altura);
      ctx.fillText(item, x, 195);
      x += 70;
    }
  });
