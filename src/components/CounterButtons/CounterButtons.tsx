import s from './CounterButtons.module.css'
import {settingType} from '../../App';

type ButtonsPropsType = {
    currentNumber: number
    inc: (number: number) => void
    reset: () => void
    settingParameters: settingType[]
}

export const CounterButtons = (props:ButtonsPropsType) => {
    const inc = () => props.inc(props.currentNumber);
    const reset = () => props.reset();
    const disableInc = props.currentNumber >= props.settingParameters[0].value;
    const disableReset = props.currentNumber === props.settingParameters[1].value;
    const incClass = disableInc ? `${s.incDisabled} ${s.inc}` : s.inc;
    const resetClass = disableReset ? `${s.resetDisabled} ${s.reset}` : s.reset;

    return (
        <div className={s.bothButtons}>
            <button className={incClass} onClick={inc} disabled={disableInc}>
                inc
            </button>
            <button className={resetClass} onClick={reset} disabled={disableReset}>
                reset
            </button>
        </div>
    )
}