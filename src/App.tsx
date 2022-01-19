import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {
    getSettingsFromLocalStorage,
    incCounterAC,
    resetCounterAC,
    setNewSettings,
    setNewValueAC,
    settingsType
} from './redux/reducer';
import {AppRootStateType} from './redux/store';

// export type settingNamesType = "max" | "start"
/*export type settingType = {
    title: string
    value: number
}
export type settingsType = {
    max: settingType
    start: settingType
}*/

function App() {
    const dispatch = useDispatch();
    const settingParameters = useSelector<AppRootStateType, settingsType>(state => state.counter.settingParameters)
    // const errorMaxValue = useSelector<AppRootStateType, boolean>(state => state.counter.errorMaxValue)
    // const errorStartValue = useSelector<AppRootStateType, boolean>(state => state.counter.errorStartValue)
    const editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentNumber)

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false);
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false);
    // const [editMode, setEditMode] = useState<boolean>(false)
/*    const [settingParameters, setSettingParameters] = useState<settingsType>(
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
    )*/
    // const [currentValue, setCurrentValue] = useState<number>(settingParameters.start.value);

    // Automatic save values to Local Storage after changing 'settingParameters';
    // In such case it`s not necessary to press the 'Set' button;
    // useEffect(() => {
    //     localStorage.setItem('counterValues',JSON.stringify(settingParameters))
    // },[settingParameters])

    useEffect(() => {
        dispatch(getSettingsFromLocalStorage())
    },[])

/*    const inc = () => {
        if (currentValue < settingParameters.max.value) {
            let newNum = currentValue + 1;
            setCurrentValue(newNum);
        }
    }*/
    // const reset = () => setCurrentValue(settingParameters.start.value);
    // const newParameterHandler = (valueType: "max" | "start", newValue: number) => {
    //     const copySettings = {...settingParameters, [valueType]:{...settingParameters[valueType], value:newValue}};
    //     setSettingParameters(copySettings);
    //     setEditMode(true);
    // }
/*    const set = () => {
        setEditMode(false);
        setCurrentValue(settingParameters.start.value);
        localStorage.setItem('counterValues',JSON.stringify(settingParameters));
    };*/
    const onErrorMaxHandler = (status:boolean) => setErrorMaxValue(status);
    const onErrorStartHandler = (status:boolean) => setErrorStartValue(status);


    const onInc = () => dispatch(incCounterAC());
    const onReset = () => dispatch(resetCounterAC());
    const onSet = () => dispatch(setNewSettings(settingParameters));
    const onNewValue = (valueType: "max" | "start", newValue: number) => dispatch(setNewValueAC(valueType, newValue));

    return (
        <div className={'common'}>
            <div className={'frame'}>
                <Settings
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    newParameterHandler={onNewValue}
                    errorMaxValue={errorMaxValue}
                    errorStartValue={errorStartValue}
                    onErrorMaxHandler={onErrorMaxHandler}
                    onErrorStartHandler={onErrorStartHandler}
                    set={onSet}
                    editMode={editMode}
                />
            </div>
            <div className={'frame'}>
                <Counter
                    currentNumber={currentValue}
                    settingParameters={settingParameters}
                    inc={onInc}
                    reset={onReset}
                    editMode={editMode}
                    errorMaxValue={errorMaxValue}
                    errorStartValue={errorStartValue}
                />
            </div>
        </div>
    );
}

export default App;
