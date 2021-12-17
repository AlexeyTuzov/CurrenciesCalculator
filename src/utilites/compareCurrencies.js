import ratesCounter from './ratesCounter.js';

const compareCurrencies = (baseCurrency, rates) => {

    const resultsArray = [];
        const inputData = {
            amount: 1,
            sourceCurrency: baseCurrency,
            targetCurrency: ''
        }
        for (let targetCurrName in rates) {
            if (targetCurrName === inputData.sourceCurrency) continue;

            inputData.targetCurrency = targetCurrName;
            const currenciesToCompare = {
                [inputData.sourceCurrency] : rates[inputData.sourceCurrency],
                [targetCurrName] : rates[targetCurrName]
            }
            const thisRate = ratesCounter(currenciesToCompare, inputData);
            resultsArray.push ( `${inputData.sourceCurrency} costs ${thisRate} ${inputData.targetCurrency}'s` );
        }
        return resultsArray;
}

export default compareCurrencies;