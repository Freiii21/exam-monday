import s from './Settings.module.css'
import {ChangeEvent} from 'react';
import {Button} from '../Button/Button';
import {settingType} from '../../App';

type SettingsPropsType = {
    currentNumber: number
    settingParameters: settingType[]
    set: () => void
}

export const Settings = (props: SettingsPropsType) => {
    const settingsElements = props.settingParameters.map(setting => {
        return (
            <div key={setting.id} className={s.row}>
                <div>
                    {setting.title}
                </div>
                <div>
                    <input type="number" value={setting.value} className={s.input}/>
                </div>
            </div>
        )

    })

    return (
        <div>
            <div className={s.settingsField}>
                {settingsElements}
            </div>
            <div className={s.buttonField}>
                    <Button title={'set'}
                            currentNumber={props.currentNumber}
                            onClick={props.set}
                            settingParameters={props.settingParameters}
                    />
            </div>
        </div>
    )
}
