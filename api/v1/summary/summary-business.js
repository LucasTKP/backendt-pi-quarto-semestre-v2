const repository = require('./summary-repository.js');
const util = require('./summary-util.js');

const getSummary = async (start_date, final_date) => {
    
    const result  = await repository.getSummary(start_date, final_date);

    if(result != null ){
        const temperatureValues = result.map(temp => temp.temperatura);
        const humidityValues = result.map(umd => umd.umidade);

        const summary = {
            temperature : {
                "mean": (temperatureValues.reduce((acc, curr) => acc + curr, 0) / temperatureValues.length).toFixed(2),
                "mode": util.calcularModa(temperatureValues),
                "median": util.calcularMediana(temperatureValues) ,
                "skewness": util.calcularAssimetria(temperatureValues),
                "standard_deviation": util.calcularDesvioPadrao(temperatureValues),
                "future_prediction": util.calcularPrevisaoFuturaTemperatura(result)
            },
            humidity : {
                "mean": (humidityValues.reduce((acc, curr) => acc + curr, 0) / humidityValues.length).toFixed(2),
                "mode": util.calcularModa(humidityValues),
                "median": util.calcularMediana(humidityValues) ,
                "skewness": util.calcularAssimetria(humidityValues),
                "standard_deviation": util.calcularDesvioPadrao(humidityValues),
                "future_prediction": util.calcularPrevisaoFuturaUmidade(result)
            }
        }

        return summary;
    }else return;

};

module.exports = {getSummary}
