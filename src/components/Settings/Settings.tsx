import s from './Settings.module.css'

type SettingsPropsType = {

}

export const Settings = (props:SettingsPropsType) => {
    return (
        <div className={s.common}>
            <div className={s.row}>
                <div>max value</div>
                <div><input type={'number'} value={'5'}/></div>
            </div>
            <div className={s.row}>
                <div>start value</div>
                <div><input type={'number'} value={'0'}/></div>
            </div>
        </div>
    )
}
