import s from './Settings.module.css'
import {Button} from '../Button/Button';
import {SettingsRow} from './SettingsRow';
import {settingNamesType, settingsType} from '../../redux/reducer';
import deepskyblue from './../assets/deepskyblue.png'
import dimGrey from './../assets/dimGrey.png'
import orange from './../assets/orange.png'
import mediumSlateBlue from './../assets/mediumSlateBlue.png'
import darkGreen from './../assets/darkGreen.png'
import cs from './../common/colorScheme.module.css'

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
    colorScheme: string
    setColor: (color:string) => void
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <div className={`${s.settingsField} ${cs[props.colorScheme]}`}>
                <SettingsRow
                    type={'max'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                    colorScheme={props.colorScheme}
                />
                <SettingsRow
                    type={'start'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                    colorScheme={props.colorScheme}
                />
                <div className={s.row}>
                    <div>
                        <span>color:</span>
                    </div>
                    <div className={s.colorSet}>
                        <img src={deepskyblue} onClick={() => props.setColor("")} alt="color"/>
                        <img src={dimGrey} onClick={() => props.setColor("grey")} alt="color"/>
                        <img src={orange} onClick={() => props.setColor("orange")} alt="color"/>
                        <img src={mediumSlateBlue} onClick={() => props.setColor("purple")} alt="color"/>
                        <img src={darkGreen} onClick={() => props.setColor("green")} alt="color"/>
                    </div>
                </div>
            </div>
            <div className={`${s.buttonField} ${cs[props.colorScheme]}`}>
                <Button title={'set'}
                        currentNumber={props.currentNumber}
                        onClick={props.set}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                        errorMaxValue={props.errorMaxValue}
                        errorStartValue={props.errorStartValue}
                        colorScheme={props.colorScheme}
                />
            </div>
        </div>
    )
}
