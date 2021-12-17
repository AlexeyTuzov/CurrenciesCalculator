//--------inputData interface:
// { amount: number (of sourceCurrency),
//   sourceCurrency: string (f.e. "USD"),
//   targetCurrency: string (f.e. "EUR") }

//--------rates interface:
// {
//   <Name f.e. USD>: {
//                      Nominal: number, 
//                      Value: number (float)   
//                    }
// }
//      "Nominal" is an amount of <Name> currency that costs a "Value" of 
//       Russian rubles (base currrency provided with this open API)
//       So on, the following task is to convert this rate to the base currency "sourceCurrency"
//       That has been entered by the user in inputData

const ratesCounter = (rates, inputData) => {
    
    if (inputData.sourceCurrency === 'RUB' && inputData.targetCurrency === 'RUB') {
        return inputData.amount;
    } 
    else if (inputData.sourceCurrency === 'RUB') {
        let name = inputData.targetCurrency;
        let a = inputData.amount;
        let v = rates[name].Value;
        let n = rates[name].Nominal;
        const result = +(n / a / v);
        if (result.toString().match(/0.00/)) return result.toFixed(4); 
        else return result.toFixed(2);
    }
    else if (inputData.targetCurrency === 'RUB') {
        let name = inputData.sourceCurrency;
        let a = inputData.amount;
        let v = rates[name].Value;
        let n = rates[name].Nominal;
        const result = +(a * v / n);
        if (result.toString().match(/0.00/)) return result.toFixed(4); 
        else return result.toFixed(2);
    }
    else {
        let nameSrc = inputData.sourceCurrency;
        let nameTrg = inputData.targetCurrency;
        let a = inputData.amount;
        let vSrc = rates[nameSrc].Value;
        let nSrc = rates[nameSrc].Nominal;
        let vTrg = rates[nameTrg].Value;
        let nTrg = rates[nameTrg].Nominal;
        const result = +(1 / (nSrc * vTrg / a / vSrc / nTrg) ); 
        if (result.toString().match(/0.00/)) return result.toFixed(4); 
        else return result.toFixed(2);
    }
}

export default ratesCounter;