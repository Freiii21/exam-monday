import s from './Settings.module.css'
import {ChangeEvent} from 'react';

type SettingsPropsType = {
    changeValuesRange: (value: number, id: "min" | "max") => void
    error: boolean
}

export const Settings = (props:SettingsPropsType) => {
    // const setMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
    //     const newValue = Number(e.currentTarget.value);
    //     if(newValue <= props.valuesRange.min){
    //
    //     }
    //     props.changeValuesRange(newValue, "max")
    // }

    const setMinValue = (e:ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        props.changeValuesRange(newValue, "min")
    }
    const errorClass = props.error ? `${s.input} ${s.error}` : s.input;
    return (
        <div className={s.common}>
            <div className={s.row}>
                <div>max value:</div>
                {/*<div>*/}
                {/*    <input type={'number'} value={props.valuesRange.max} onChange={setMaxValue} className={errorClass}/>*/}
                {/*</div>*/}
            </div>
            <div className={s.row}>
                <div>start value:</div>
                {/*<div>*/}
                {/*    <input type={'number'} value={props.valuesRange.min} onChange={setMinValue} className={errorClass}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
