import s from './Counter.module.css'
import {settingsType} from '../../App';
import {Button} from '../Button/Button';

type CounterPropsType = {
    currentNumber: number
    settingParameters: settingsType
    inc: () => void
    reset: () => void
    editMode: boolean
}

export const Counter = (props: CounterPropsType) => {
    const editModeOn = `${s.common} ${s.editModeOn}`;
    const editModeOff = props.currentNumber === props.settingParameters.max.value ?
        `${s.common} ${s.editModeOff} ${s.max}` : `${s.common} ${s.editModeOff}`;
    const counterField = !props.editMode ? editModeOff : editModeOn;

    return (
        <div>
            <div className={counterField}>
                {!props.editMode ? props.currentNumber : "edit mode"}
            </div>
            <div className={s.buttonsField}>
                <Button title={'inc'}
                        currentNumber={props.currentNumber}
                        onClick={props.inc}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                />
                <Button title={'reset'}
                        currentNumber={props.currentNumber}
                        onClick={props.reset}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                />
            </div>
        </div>
    )
}