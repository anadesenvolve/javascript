function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime();
    const futuro = new Date(dataFutura).getTime();
    const diferenca = futuro - agora;

    if (diferenca <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
}

function atualizarTemporizador() {
    const dataFutura = "2025-12-31T23:59:59";
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById("dias").textContent = tempoRestante.dias;
    document.getElementById("horas").textContent = tempoRestante.horas;
    document.getElementById("minutos").textContent = tempoRestante.minutos;
    document.getElementById("segundos").textContent = tempoRestante.segundos;
}

setInterval(atualizarTemporizador, 1000);
