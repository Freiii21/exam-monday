import s from './Counter.module.css'
import {valuesRangeType} from '../../App';

type CounterPropsType = {
    currentNumber: number;
    valuesRange: valuesRangeType
}

export const Counter = (props:CounterPropsType) => {
    const counterClass = props.currentNumber === props.valuesRange.max ? `${s.usual} ${s.max}` : s.usual;

    return (
        <div className={counterClass}>
            {props.currentNumber}
        </div>
    )
}