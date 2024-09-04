function calcularPace(paceMinutos, paceSegundos, porcentagemEsforco) {
  var paceOriginalEmSegundos = paceMinutos * 60 + paceSegundos;

  var novoPaceEmSegundos = (100 / porcentagemEsforco) * paceOriginalEmSegundos;

  var novoPaceMinutos = Math.floor(novoPaceEmSegundos / 60);
  var novoPaceSegundos = Math.round(novoPaceEmSegundos % 60);

  return (
    novoPaceMinutos +
    ":" +
    (novoPaceSegundos < 10 ? "0" : "") +
    novoPaceSegundos
  );
}

// const minute = 6;
// const second = 9;

const minute = 4;
const second = 43;
console.log(`Z1: 70%  ${calcularPace(minute, second, 70)}min/km, Fácil/Leve`);
console.log(`Z2: 75%  ${calcularPace(minute, second, 75)}min/km, Moderado`);
console.log(`Z3: 80%  ${calcularPace(minute, second, 80)}min/km, Forte`);
console.log(`Z4: 90%  ${calcularPace(minute, second, 90)}min/km, Pesado`);
console.log(`Z5: 100% ${calcularPace(minute, second, 100)}min/km, Máximo`);
