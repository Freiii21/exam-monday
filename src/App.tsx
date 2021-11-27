import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

export type settingNamesType = "max" | "start"

export type settingType = {
    title: string
    value: number
}

export type settingsType = {
    max: settingType
    start: settingType
}

function App() {
    const [error, setError] = useState<boolean>(false);
    const [settingParameters, setSettingParameters] = useState<settingsType>(
        {
            max: {
                title:"max value:",
                value:5,
            },
            start: {
                title:"start value:",
                value:0,
            },
        }
    )
    const [currentValue, setCurrentValue] = useState<number>(settingParameters.start.value);

    const inc = () => {
        if (currentValue < settingParameters.max.value) {
            let newNum = currentValue + 1;
            setCurrentValue(newNum);
        }
    }
    const reset = () => setCurrentValue(settingParameters.start.value);

    const newParameterHandler = (type: settingNamesType, newValue: number) => {
        const copySettings = {...settingParameters, [type]:{...settingParameters[type], value:newValue}};
        setSettingParameters(copySettings);
    }
    const set = () => alert('Set pressed');

    return (
        <div className={'common'}>
            <div className={'frame'}>
                <Settings
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    newParameterHandler={newParameterHandler}
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
