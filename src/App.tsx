import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export type settingType = {
    id: string
    title: string
    value: number
}

function App() {
    const [error, setError] = useState<boolean>(false);
    const [settingParameters, setSettingParameters] = useState<Array<settingType>>([
        {id: v1(), title: 'max value:', value: 5},
        {id: v1(), title: 'start value:', value: 0},
    ])
    const [currentValue, setCurrentValue] = useState<number>(settingParameters[1].value);

    const inc = () => {
        if (currentValue < settingParameters[0].value) {
            let newNum = currentValue + 1;
            setCurrentValue(newNum);
        }
    }
    const reset = () => setCurrentValue(settingParameters[1].value);
    const set = () => alert('Set pressed');

    return (
        <div className={'common'}>
            <div className={'frame'}>
                <Settings
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    set={set}
                />
            </div>
            <div className={'frame'}>
                <Counter
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    inc={inc}
                    reset={reset}
                />
            </div>
        </div>
    );
}

export default App;
