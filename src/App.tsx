import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {CounterButtons} from './components/CounterButtons/CounterButtons';
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
        {id: 'max', title:'max value:', value:7},
        {id: 'min', title:'start value:', value:0},
    ])

    const [currentNum, setCurrentNum] = useState<number>(settingParameters[1].value);

    const inc = (currentNumber: number) => {
        if (currentNumber < settingParameters[0].value) {
            let newNum = currentNumber + 1;
            setCurrentNum(newNum);
        }
    }
    const reset = () => setCurrentNum(settingParameters[1].value);


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
                <div className={'numbers'}>
                    <Counter currentNumber={currentNum} settingParameters={settingParameters}/>
                </div>
                <div className={'buttons'}>
                    <CounterButtons currentNumber={currentNum} inc={inc} reset={reset} settingParameters={settingParameters}/>
                </div>
            </div>
        </div>
    );
}

export default App;
