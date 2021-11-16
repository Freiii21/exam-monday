import s from './Counter.module.css'
import {settingType} from '../../App';

type CounterPropsType = {
    currentNumber: number
    settingParameters: settingType[]
}

export const Counter = (props:CounterPropsType) => {
    const counterClass = props.currentNumber === props.settingParameters[0].value ? `${s.usual} ${s.max}` : s.usual;

    return (
        <div className={counterClass}>
            {props.currentNumber}
        </div>
    )
}