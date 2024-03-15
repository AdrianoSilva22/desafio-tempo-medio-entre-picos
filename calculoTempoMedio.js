let mensagemErro = ""

function mostrarTempoMedioEntrePicos() {

    let tempoEntrePicosEmSegundos= [] 
    let tempoMedioEntrePicosEmSegundos = 0
    let contador = 0

    for (let i = 0; i < tempoEntrePicosEmSegundos.length; i++) {
        if (tempoEntrePicosEmSegundos.length < 2) {
            mensagemErro = "picos insuficientes para o cálculo de tempo médio!"
            return mensagemErro
        } else {
            contador += tempoEntrePicosEmSegundos[i]
        }

        if (i === tempoEntrePicosEmSegundos.length - 1) {
            (tempoMedioEntrePicosEmSegundos = contador / tempoEntrePicosEmSegundos.length)
        }
    }
    const resultadoDoTempoMedioEntrePicos = formatarMininutoESegundo(Math.round(tempoMedioEntrePicosEmSegundos));
    return resultadoDoTempoMedioEntrePicos
}

function formatarMininutoESegundo(tempoEmSegundos) {
    let minutos
    let segundos
    if (!tempoEmSegundos || tempoEmSegundos.length === 0) {
        mensagemErro = "Informe valores entre picos para descobrir o tempo médio"
        return mensagemErro
    } else {
        minutos = Math.floor(tempoEmSegundos / 60)
        segundos = tempoEmSegundos % 60
        const minutosESegundosFormatados = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
        return minutosESegundosFormatados
    }
}

console.log(mostrarTempoMedioEntrePicos());