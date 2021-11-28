import React, {useState} from 'react';
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
    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false);
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false);

    const [editMode, setEditMode] = useState<boolean>(false)

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
        setEditMode(true);
    }
    const set = () => alert('Set pressed');
    // const onErrorHandler = (type:settingNamesType,status: boolean) => {
    //     const copySettings = {...settingParameters, [type]:{...settingParameters[type], error:status}}
    //     setSettingParameters(copySettings);
    // }
    const onErrorMaxHandler = (status:boolean) => setErrorMaxValue(status);
    const onErrorStartHandler = (status:boolean) => setErrorStartValue(status);


    return (
        <div className={'common'}>
            <div className={'frame'}>
                <Settings
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    newParameterHandler={newParameterHandler}
                    // globalError={globalError}
                    // onErrorHandler={onErrorHandler}
                    errorMaxValue={errorMaxValue}
                    errorStartValue={errorStartValue}
                    onErrorMaxHandler={onErrorMaxHandler}
                    onErrorStartHandler={onErrorStartHandler}
                    set={set}
                    editMode={editMode}
                />
            </div>
            <div className={'frame'}>
                <Counter
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    inc={inc}
                    reset={reset}
                    editMode={editMode}
                />
            </div>
        </div>
    );
}

export default App;
