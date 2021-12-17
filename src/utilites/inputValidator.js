import valutesJson from './valutes.json';

let valutesObject = JSON.stringify(valutesJson);
valutesObject = JSON.parse(valutesObject);
let valutes = Object.keys(valutesObject.Valute);

const inputValidator = (input, rates) => {

    input.trim();

    let amount = '';
    if ( input.match(/\d\.\d/) ) amount = input.match(/\d\.\d/).join();
    else if ( input.match(/\d/) ) amount = input.match(/\d/).join();

    let sourceCurrency = input.match(/\D{3}\s/i);
    if (sourceCurrency) {
        sourceCurrency = input.match(/\D{3}\s/i).join('').trim();
        sourceCurrency = valutes.find(item => {
            return item === sourceCurrency.toUpperCase() ? item : null;
        });
    }

    let targetCurrency = input.match(/((in)|(to))\s\D{3}/ig);
    if (targetCurrency) {
        targetCurrency = input.match(/((in)|(to))\s\D{3}/ig).join('').trim().slice(3);
        targetCurrency = valutes.find(item => {
            return item === targetCurrency.toUpperCase() ? item : null;
        })
    }

    if ( !(sourceCurrency in rates) ) return console.log('No such source currency in list!');
    if ( !(targetCurrency in rates) ) return console.log('No such target currency in list!');

    if (amount && sourceCurrency && targetCurrency) return {
        amount, sourceCurrency, targetCurrency
    }
    else return null;
}

export default inputValidator;