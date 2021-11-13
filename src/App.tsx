import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {CounterButtons} from './components/CounterButtons/CounterButtons';
import {Settings} from './components/Settings/Settings';
import {SettingsButton} from './components/SettingsButton/SettingsButton';

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
        <div className={'common'}>
            <div className={'frame'}>
                <div className={'settings'}>
                    <Settings />
                </div>
                <div className={'buttons'}>
                    <SettingsButton />
                </div>
            </div>
            <div className={'frame'}>
                <div className={'numbers'}>
                    <Counter currentNumber={num} valuesRange={valuesRange}/>
                </div>
                <div className={'buttons'}>
                    <CounterButtons currentNumber={num} inc={inc} reset={reset} valuesRange={valuesRange}/>
                </div>
            </div>
        </div>
    );
}

export default App;
