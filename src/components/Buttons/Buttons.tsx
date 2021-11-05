import s from './Buttons.module.css'
import {valuesRangeType} from '../../App';

type ButtonsPropsType = {
    currentNumber: number
    inc: (number: number) => void
    reset: () => void
    valuesRange: valuesRangeType
}

export const Buttons = (props:ButtonsPropsType) => {
    const inc = () => props.inc(props.currentNumber);
    const reset = () => props.reset();
    const disableInc = props.currentNumber >= props.valuesRange.max;
    const disableReset = props.currentNumber === props.valuesRange.min;
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