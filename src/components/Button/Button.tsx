import s from './Button.module.css'
import {settingsType} from '../../App';

type ButtonsPropsType = {
    title: string
    currentNumber: number
    onClick: () => void
    settingParameters: settingsType
    editMode: boolean
}

export const Button = (props: ButtonsPropsType) => {
    const onClickHandler = () => {
        props.onClick();
    }

    let disable: boolean;
    switch (props.title) {
        case 'inc':
            disable = !props.editMode ? props.currentNumber === props.settingParameters.max.value : true;
            break;
        case 'reset':
            disable = !props.editMode ?  props.currentNumber === props.settingParameters.start.value : true;
            break;
        case 'set':
            disable = !props.editMode;
            break;
        default:
            disable = false;
            break;
    }
    const usualClass = props.title === 'set' ? `${s.usual} ${s.singleButton}` : s.usual;
    const buttonClass = disable ? `${usualClass} ${s.disabled}` : usualClass;

    return (
        <button className={buttonClass} onClick={onClickHandler} disabled={disable}>
            {props.title}
        </button>
    )
}
