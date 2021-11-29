import s from './Counter.module.css'
import {settingsType} from '../../App';
import {Button} from '../Button/Button';

type CounterPropsType = {
    currentNumber: number
    settingParameters: settingsType
    inc: () => void
    reset: () => void
    editMode: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
}

export const Counter = (props: CounterPropsType) => {
    const editModeOn = props.errorMaxValue || props.errorStartValue ?
        `${s.editModeOn} ${s.red}` : s.editModeOn;
    const editModeOff = props.currentNumber === props.settingParameters.max.value ?
        `${s.editModeOff} ${s.red}` : s.editModeOff;
    const counterField = !props.editMode ? editModeOff : editModeOn;

    return (
        <div>
            <div className={s.common}>
                <div className={counterField}>
                    {!props.editMode ?
                    props.currentNumber
                    : props.errorMaxValue || props.errorStartValue ?
                        'Incorrect value!'
                        : 'enter values and press \'set\''
                }</div>
            </div>
            <div className={s.buttonsField}>
                <Button title={'inc'}
                        currentNumber={props.currentNumber}
                        onClick={props.inc}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                        errorMaxValue={props.errorMaxValue}
                        errorStartValue={props.errorStartValue}
                />
                <Button title={'reset'}
                        currentNumber={props.currentNumber}
                        onClick={props.reset}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                        errorMaxValue={props.errorMaxValue}
                        errorStartValue={props.errorStartValue}
                />
            </div>
        </div>
    )
}