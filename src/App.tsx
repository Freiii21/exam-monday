import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {
    getSettingsFromLocalStorage,
    incCounterAC,
    resetCounterAC, setColorAC,
    setNewSettings,
    setNewValueAC, settingNamesType,
    settingsType, toggleBrokenAC
} from './redux/reducer';
import {AppRootStateType} from './redux/store';
import cs from './components/common/colorScheme.module.css'
import brokenApp from './components/assets/brokenApp.png'
import brokeImg from './components/assets/brokeImg.png'
import fixImg from './components/assets/fixImg.png'


function App() {
    const dispatch = useDispatch();
    const settingParameters = useSelector<AppRootStateType, settingsType>(state => state.counter.settingParameters)
    const editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentNumber)
    const colorScheme = useSelector<AppRootStateType, string>(state => state.counter.colorScheme)
    const isBroken = useSelector<AppRootStateType, boolean>(state => state.counter.isBroken)

    const onErrorMaxHandler = (status: boolean) => setErrorMaxValue(status);
    const onErrorStartHandler = (status: boolean) => setErrorStartValue(status);

    useEffect(() => {
        dispatch(getSettingsFromLocalStorage())
    }, [dispatch])

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false);
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false);

    const onInc = () => dispatch(incCounterAC());
    const onReset = () => dispatch(resetCounterAC());
    const onSet = () => dispatch(setNewSettings(settingParameters, colorScheme));
    const onNewValue = (valueType: settingNamesType, newValue: number) => dispatch(setNewValueAC(valueType, newValue));
    const setColor = (color: string) => dispatch(setColorAC(color));
    const onBroken = (broken: boolean) => dispatch(toggleBrokenAC(broken));



    return (
        <div className={'common'}>
            {!isBroken ?
                <div className={'container'}>
                    <div className={`${'frame'} ${cs[colorScheme]}`}>
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
                            colorScheme={colorScheme}
                            setColor={setColor}
                        />
                    </div>
                    <div className={`${'frame'} ${cs[colorScheme]}`}>
                        <Counter
                            currentNumber={currentValue}
                            settingParameters={settingParameters}
                            inc={onInc}
                            reset={onReset}
                            editMode={editMode}
                            errorMaxValue={errorMaxValue}
                            errorStartValue={errorStartValue}
                            colorScheme={colorScheme}
                        />
                    </div>
                </div>
                :
                <div className={'containerBroken'}>
                    <img src={brokenApp} onClick={()=>alert("Everything is useless, the counter is broken!")}/>
                </div>
            }
            <div className={'brokeField'}>
                {!isBroken ?
                    <>
                        <span>Please, do not press the button</span>
                        <img src={brokeImg} alt="" onClick={()=>onBroken(!isBroken)}/>
                    </>
                    :
                    <>
                        <span>Oh, I told you... Fix it?</span>
                        <img src={fixImg} alt="" onClick={()=>onBroken(!isBroken)}/>
                    </>
                }

            </div>
        </div>
    );
}

export default App;
