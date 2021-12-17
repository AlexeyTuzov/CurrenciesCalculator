import * as axios from 'axios';

const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';

const rateRequest = async () => {
    return await axios.get(URL)
    .then( res => {
        return JSON.parse( JSON.stringify(res.data.Valute) );
    })
    .catch( err => {
        console.log(err.message);
    });

}

export default rateRequest;