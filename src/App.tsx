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
    setNewValueAC, settingNamesType,
    settingsType
} from './redux/reducer';
import {AppRootStateType} from './redux/store';


function App() {
    const dispatch = useDispatch();
    const settingParameters = useSelector<AppRootStateType, settingsType>(state => state.counter.settingParameters)
    const editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentNumber)

    const onErrorMaxHandler = (status:boolean) => setErrorMaxValue(status);
    const onErrorStartHandler = (status:boolean) => setErrorStartValue(status);

    useEffect(() => {
        dispatch(getSettingsFromLocalStorage())
    },[])

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false);
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false);

    const onInc = () => dispatch(incCounterAC());
    const onReset = () => dispatch(resetCounterAC());
    const onSet = () => dispatch(setNewSettings(settingParameters));
    const onNewValue = (valueType: settingNamesType, newValue: number) => dispatch(setNewValueAC(valueType, newValue));

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
