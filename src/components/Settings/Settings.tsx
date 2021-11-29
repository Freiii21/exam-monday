import s from './Settings.module.css'
import {Button} from '../Button/Button';
import {settingNamesType, settingsType} from '../../App';
import {SettingsRow} from './SettingsRow';

type SettingsPropsType = {
    currentNumber: number
    settingParameters: settingsType
    newParameterHandler: (type: settingNamesType, newValue: number) => void
    errorMaxValue: boolean
    errorStartValue: boolean
    onErrorMaxHandler: (status:boolean) => void
    onErrorStartHandler: (status:boolean) => void
    set: () => void
    editMode: boolean
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <div className={s.settingsField}>
                <SettingsRow
                    type={'max'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                />
                <SettingsRow
                    type={'start'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                />
            </div>
            <div className={s.buttonField}>
                <Button title={'set'}
                        currentNumber={props.currentNumber}
                        onClick={props.set}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                        errorMaxValue={props.errorMaxValue}
                        errorStartValue={props.errorStartValue}
                />
            </div>
        </div>
    )
}
