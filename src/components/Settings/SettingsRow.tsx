import s from './Settings.module.css';
import {ChangeEvent} from 'react';
import {settingNamesType, settingsType} from '../../redux/reducer';
import cs from './../common/colorScheme.module.css'

type SettingsRowPropsType = {
    type:settingNamesType
    settingParameters:settingsType
    newParameterHandler:(type:settingNamesType,newValue:number) => void
    errorMaxValue: boolean
    errorStartValue: boolean
    onErrorMaxHandler: (status:boolean) => void
    onErrorStartHandler: (status:boolean) => void
    colorScheme: string
}

export const SettingsRow = (props:SettingsRowPropsType) => {
    const handleFocus = (e:ChangeEvent<HTMLInputElement>) => e.currentTarget.select();
    const onChangeValue = (e:ChangeEvent<HTMLInputElement>) => {
                const newValue = Number(e.currentTarget.value);
                switch (props.type) {
                    case 'start':
                        if (newValue < 0){
                            props.onErrorStartHandler(true);
                        } else if (newValue >= props.settingParameters.max.value){
                            props.onErrorStartHandler(true);
                            props.onErrorMaxHandler(true);
                        } else {
                            props.onErrorStartHandler(false);
                            props.onErrorMaxHandler(false);
                        }
                        break;
                    case 'max':
                        if(newValue <= props.settingParameters.start.value || newValue < 0){
                            props.onErrorStartHandler(true);
                            props.onErrorMaxHandler(true);
                        } else if (props.settingParameters.start.value < 0){
                            props.onErrorStartHandler(true);
                            props.onErrorMaxHandler(false);
                        } else {
                            props.onErrorStartHandler(false);
                            props.onErrorMaxHandler(false);
                        }
                        break;
                    default:
                        break;
                }
                props.newParameterHandler(props.type,newValue);
            };

    const maxValueClass = props.errorMaxValue ? `${s.input} ${s.error}` : `${s.input} ${cs[props.colorScheme]}`;
    const startValueClass = props.errorStartValue ? `${s.input} ${s.error}` : `${s.input} ${cs[props.colorScheme]}`;
    const inputClass = props.type ==='max' ? maxValueClass : startValueClass;

    return (
        <div className={s.row}>
            <div>
                {props.settingParameters[props.type].title}
            </div>
            <div>
                <input
                    type="number"
                    value={props.settingParameters[props.type].value}
                    onChange={onChangeValue}
                    onFocus={handleFocus}
                    className={inputClass}
                />
            </div>
        </div>
    )
}
