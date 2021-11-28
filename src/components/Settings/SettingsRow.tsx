import s from './Settings.module.css';
import {ChangeEvent, useState} from 'react';
import {settingNamesType, settingsType} from '../../App';

type SettingsRowPropsType = {
    // title:string
    // value:number
    type:settingNamesType
    settingParameters:settingsType
    newParameterHandler:(type:settingNamesType,newValue:number) => void
    errorMaxValue: boolean
    errorStartValue: boolean
    onErrorMaxHandler: (status:boolean) => void
    onErrorStartHandler: (status:boolean) => void
    // globalError: boolean
    // onErrorHandler: (status:boolean) => void
}

export const SettingsRow = (props:SettingsRowPropsType) => {
    // const [localError, setLocalError] = useState<boolean>(false)

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
    // const determineClass = () => {
    //     switch (props.type) {
    //         case 'start':
    //             return props.errorStartValue ? `${s.input} ${s.error}` : s.input
    //         case 'max':
    //             return props.errorMaxValue ? `${s.input} ${s.error}` : s.input
    //         default:
    //             return s.input
    //     }
    // };
    const maxValueClass = props.errorMaxValue ? `${s.input} ${s.error}` : s.input;
    const startValueClass = props.errorStartValue ? `${s.input} ${s.error}` : s.input;
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
                    className={inputClass}/>
            </div>
        </div>
    )
}
