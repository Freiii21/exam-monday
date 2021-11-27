import s from './Settings.module.css';
import {ChangeEvent, useState} from 'react';
import {settingNamesType, settingsType} from '../../App';

type SettingsRowPropsType = {
    // title:string
    // value:number
    type:settingNamesType
    settingParameters:settingsType
    newParameterHandler:(type:settingNamesType,newValue:number) => void
}

export const SettingsRow = (props:SettingsRowPropsType) => {
    const [error, setError] = useState<boolean>(false)

    const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
                const newValue = Number(e.currentTarget.value);
                switch (props.type) {
                    case 'start':
                        newValue < 0 || newValue >= props.settingParameters.max.value? setError(true) : setError(false);
                        break;
                    case 'max':
                        newValue <= props.settingParameters.start.value ? setError(true) : setError(false);
                        break;
                    default:
                        break;
                }
                props.newParameterHandler(props.type,newValue);
            };
    const inputClass = error ? `${s.input} ${s.error}` : s.input;

    return (
        <div className={s.row}>
            <div>
                {props.settingParameters[props.type].title}
            </div>
            <div>
                <input type="number" value={props.settingParameters[props.type].value} onChange={onChangeValue} className={inputClass}/>
            </div>
        </div>
    )
}
