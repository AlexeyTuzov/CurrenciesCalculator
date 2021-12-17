import Hint from './hint.js';
import {useState} from 'react';

const HintWrap = () => {

    const [showHint, setShowHint] = useState(false);

    return <Hint 
    showHint={showHint}
    setShowHint={setShowHint}/>
}

export default HintWrap;