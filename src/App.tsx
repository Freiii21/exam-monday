import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Buttons} from './components/Buttons/Buttons';

export type valuesRangeType = {
    min: number
    max: number
}

function App() {
    const valuesRange: valuesRangeType = {
        min: 0,
        max: 5,
    }
    const [num, setNum] = useState<number>(valuesRange.min);

    const inc = (currentNumber: number) => {
        if (currentNumber < valuesRange.max) {
            let newNum = currentNumber + 1;
            setNum(newNum);
        }
    }
    const reset = () => setNum(valuesRange.min);

    return (
        <div className={'counter'}>
            <div className={'numbers'}>
                <Counter currentNumber={num} valuesRange={valuesRange}/>
            </div>
            <div className={'buttons'}>
                <Buttons currentNumber={num} inc={inc} reset={reset} valuesRange={valuesRange}/>
            </div>
        </div>
    );
}

export default App;
