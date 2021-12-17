import Rub from './rubObject';

const getJSXfromValutes = (Valutes) => {
    let valutesObj = JSON.parse(JSON.stringify(Valutes));
    valutesObj = {...valutesObj.Valute, ...Rub}
    let valutesArray = [];

    for (let key in valutesObj) {
        valutesArray.push(valutesObj[key]);
    }
    let style = {
        margin: '2px',
    }

    return valutesArray.map( item => {
        return <p style={style}>{item.CharCode} - {item.Name}</p>;
    });
}

export default getJSXfromValutes;