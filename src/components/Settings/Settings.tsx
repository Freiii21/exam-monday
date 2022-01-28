import s from './Settings.module.css'
import {Button} from '../Button/Button';
import {SettingsRow} from './SettingsRow';
import {settingNamesType, settingsType} from '../../redux/reducer';
import lightpink from './../assets/pink.png'
import deepskyblue from './../assets/deepskyblue.png'
import aquamarine from './../assets/aquamarine.png'
import darkgrey from './../assets/darkgrey.png'
import orange from './../assets/orange.png'




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
            <div className={s.settingsField} style={{borderColor:props.colorScheme,color:props.colorScheme}}>
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
                        <img src={deepskyblue} onClick={() => props.setColor("deepskyblue")}/>
                        <img src={lightpink} onClick={() => props.setColor("lightpink")}/>
                        <img src={aquamarine} onClick={() => props.setColor("aquamarine")}/>
                        <img src={darkgrey} onClick={() => props.setColor("darkgrey")}/>
                        <img src={orange} onClick={() => props.setColor("orange")}/>
                    </div>
                </div>
            </div>
            <div className={s.buttonField} style={{borderColor:props.colorScheme}}>
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
