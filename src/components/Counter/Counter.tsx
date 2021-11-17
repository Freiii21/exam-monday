import s from './Counter.module.css'
import {settingType} from '../../App';
import {Button} from '../Button/Button';

type CounterPropsType = {
    currentNumber: number
    settingParameters: settingType[]
    inc: () => void
    reset: () => void
}

export const Counter = (props: CounterPropsType) => {
    const counterClass = props.currentNumber === props.settingParameters[0].value ? `${s.usual} ${s.max}` : s.usual;

    return (
        <div>
            <div className={counterClass}>
                {props.currentNumber}
            </div>
            <div className={s.buttonsField}>
                <Button title={'inc'}
                        currentNumber={props.currentNumber}
                        onClick={props.inc}
                        settingParameters={props.settingParameters}
                />
                <Button title={'reset'}
                        currentNumber={props.currentNumber}
                        onClick={props.reset}
                        settingParameters={props.settingParameters}
                />
            </div>
        </div>
    )
}