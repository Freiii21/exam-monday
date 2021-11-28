import s from './Settings.module.css'
import {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {settingNamesType, settingsType} from '../../App';
import {SettingsRow} from './SettingsRow';

type SettingsPropsType = {
    currentNumber: number
    settingParameters: settingsType
    newParameterHandler: (type: settingNamesType, newValue: number) => void
    // globalError: boolean
    // onErrorHandler: (status:boolean) => void
    errorMaxValue: boolean
    errorStartValue: boolean
    onErrorMaxHandler: (status:boolean) => void
    onErrorStartHandler: (status:boolean) => void
    set: () => void
    editMode: boolean
}

export const Settings = (props: SettingsPropsType) => {
    // const settingsElements = props.settingParameters.map(setting => {
    //     const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
    //         const newValue = Number(e.currentTarget.value);
    //         props.newParameterHandler(setting.id,newValue);
    //     }
    //
    //     return (
    //         <div key={setting.id} className={s.row}>
    //             <div>
    //                 {setting.title}
    //             </div>
    //             <div>
    //                 <input type="number" value={setting.value} onChange={onChangeValue} className={s.input}/>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div>
            <div className={s.settingsField}>
                <SettingsRow
                    // title={props.settingParameters.max.title}
                    // value={props.settingParameters.max.value}
                    type={'max'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                    // globalError={props.globalError}
                    // onErrorHandler={props.onErrorHandler}
                />
                <SettingsRow
                    // title={props.settingParameters.start.title}
                    // value={props.settingParameters.start.value}
                    type={'start'}
                    settingParameters={props.settingParameters}
                    newParameterHandler={props.newParameterHandler}
                    errorMaxValue={props.errorMaxValue}
                    errorStartValue={props.errorStartValue}
                    onErrorMaxHandler={props.onErrorMaxHandler}
                    onErrorStartHandler={props.onErrorStartHandler}
                    // globalError={props.globalError}
                    // onErrorHandler={props.onErrorHandler}
                />
            </div>
            <div className={s.buttonField}>
                <Button title={'set'}
                        currentNumber={props.currentNumber}
                        onClick={props.set}
                        settingParameters={props.settingParameters}
                        editMode={props.editMode}
                />
            </div>
        </div>
    )
}
