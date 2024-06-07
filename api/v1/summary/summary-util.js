

function converterDataFormato(dataString) {
    const partes = dataString.split('/');
    if (partes.length !== 3) {
        throw new Error("Invalid date format. Use the format 'DD/MM/YYYY'.");
    }
    return partes[1] + '/' + partes[0] + '/' + partes[2];
}

function calcularModa(valores) {
    const counts = {};
    valores.forEach(valor => {
        counts[valor] = (counts[valor] || 0) + 1;
    });
    let maxCount = 0;
    let moda = null;
    for (const [valor, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            moda = valor;
        }
    }
    return moda;
}

function calcularMediana(valores) {
    const sorted = valores.sort((a, b) => a - b);
    const meio = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return ((sorted[meio - 1] + sorted[meio]) / 2).toFixed(2);
    } else {
        return sorted[meio].toFixed(2);
    }
}

function calcularDesvioPadrao(valores) {
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diffSquare = valores.map(val => Math.pow(val - media, 2));
    const avgSquareDiff = diffSquare.reduce((acc, curr) => acc + curr, 0) / diffSquare.length;
    return Math.sqrt(avgSquareDiff).toFixed(2);
}

function calcularAssimetria(valores) {
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const n = valores.length;
    const sumCubedDiff = valores.reduce((acc, curr) => acc + Math.pow(curr - media, 3), 0);
    const desvioPadrao = Math.sqrt(valores.reduce((acc, curr) => acc + Math.pow(curr - media, 2), 0) / n);
    const assimetria = (n / ((n - 1) * (n - 2))) * (sumCubedDiff / Math.pow(desvioPadrao, 3));
    return assimetria.toFixed(2); 
}

function calcularPrevisaoFuturaTemperatura(temperaturas) {
    const x = [];
    const y = [];
    temperaturas.forEach(temp => {
        x.push(new Date(temp.data).getTime());
        y.push(temp.temperatura);
    });
    const n = x.length;
    const xAvg = x.reduce((acc, curr) => acc + curr, 0) / n;
    const yAvg = y.reduce((acc, curr) => acc + curr, 0) / n;
    let num = 0;
    let den = 0;
    for (let i = 0; i < n; i++) {
        num += (x[i] - xAvg) * (y[i] - yAvg);
        den += Math.pow((x[i] - xAvg), 2);
    }
    const slope = num / den;
    const intercept = yAvg - slope * xAvg;

    const ultimaData = new Date(x[n - 1]);
    ultimaData.setDate(ultimaData.getDate() + 1);
    const previsao = (slope * ultimaData.getTime() + intercept).toFixed(2);
    return previsao;
}

function calcularPrevisaoFuturaUmidade(temperaturas) {
    const x = [];
    const y = [];
    temperaturas.forEach(temp => {
        x.push(new Date(temp.data).getTime());
        y.push(temp.umidade);
    });
    const n = x.length;
    const xAvg = x.reduce((acc, curr) => acc + curr, 0) / n;
    const yAvg = y.reduce((acc, curr) => acc + curr, 0) / n;
    let num = 0;
    let den = 0;
    for (let i = 0; i < n; i++) {
        num += (x[i] - xAvg) * (y[i] - yAvg);
        den += Math.pow((x[i] - xAvg), 2);
    }
    const slope = num / den;
    const intercept = yAvg - slope * xAvg;

    const ultimaData = new Date(x[n - 1]);
    ultimaData.setDate(ultimaData.getDate() + 1);
    const previsao = (slope * ultimaData.getTime() + intercept).toFixed(2);
    return previsao;
}

module.exports = {
    calcularPrevisaoFuturaUmidade,
    calcularPrevisaoFuturaTemperatura,
    calcularAssimetria,
    calcularDesvioPadrao,
    calcularMediana,
    calcularModa,
    converterDataFormato
}