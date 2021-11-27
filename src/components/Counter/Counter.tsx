import s from './Counter.module.css'
import {settingsType} from '../../App';
import {Button} from '../Button/Button';

type CounterPropsType = {
    currentNumber: number
    settingParameters: settingsType
    inc: () => void
    reset: () => void
}

export const Counter = (props: CounterPropsType) => {
    const counterField = props.currentNumber === props.settingParameters.max.value ? `${s.usual} ${s.max}` : s.usual;

    return (
        <div>
            <div className={counterField}>
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