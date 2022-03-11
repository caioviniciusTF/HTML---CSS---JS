function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorKm = parseFloat(valor);
  var valorAnosLuz = valorKm / 9461000000000;
  var tempoEmDiasPercorridos = valorAnosLuz * 365;
  console.log(valorAnosLuz);

  var valorKmEmAnosLuz = document.getElementById("valorConvertido");
  var valorConvertido =
    valorKm +
    " KM em Anos Luz é de " +
    valorAnosLuz +
    ".<br> E o tempo em dias para percorrer todo esse percurso seria de " +
    tempoEmDiasPercorridos +
    " dias! <br> Haja Tempo!";
  valorKmEmAnosLuz.innerHTML = valorConvertido;
}
