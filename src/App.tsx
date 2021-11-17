import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {v1} from 'uuid';
// import {Settings} from './components/Settings/Settings';
// import {SettingsButton} from './components/SettingsButton/SettingsButton';

export type settingType = {
    id: string
    title: string
    value: number
}

function App() {
    const [error, setError] = useState<boolean>(false);
    const [settingParameters, setSettingParameters] = useState<Array<settingType>>([
        {id: v1(), title:'max value:', value:7},
        {id: v1(), title:'start value:', value:0},
    ])

    const [currentValue, setCurrentValue] = useState<number>(settingParameters[1].value);

    const inc = () => {
        if (currentValue < settingParameters[0].value) {
            let newNum = currentValue + 1;
            setCurrentValue(newNum);
        }
    }
    const reset = () => setCurrentValue(settingParameters[1].value);

    return (
        <div className={'common'}>
            {/*<div className={'frame'}>*/}
            {/*    /!*<div className={'settings'}>*!/*/}
            {/*    /!*    <Settings valuesRange={valuesRange} changeValuesRange={changeValuesRange} error={error}/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    <div className={'buttons'}>*/}
            {/*        <SettingsButton/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'frame'}>
                <div>
                    <Counter
                        currentNumber={currentValue}
                        settingParameters={settingParameters}
                        inc={inc}
                        reset={reset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
