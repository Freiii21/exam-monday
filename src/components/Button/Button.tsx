import s from './Button.module.css'
import {settingsType} from '../../redux/reducer';
import cs from './../common/colorScheme.module.css'

type ButtonsPropsType = {
    title: string
    currentNumber: number
    onClick: () => void
    settingParameters: settingsType
    editMode: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
    colorScheme: string
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
            if(props.editMode){
                disable = props.errorMaxValue || props.errorStartValue;
            } else {
                disable = true
            }
            break;
        default:
            disable = false;
            break;
    }
    const colorScheme = props.colorScheme+"Back";
    const usualClass = props.title === 'set' ? `${s.usual} ${s.singleButton} ${cs[colorScheme]}` : `${s.usual} ${cs[colorScheme]}`;
    const buttonClass = disable ? `${usualClass} ${s.disabled}` : usualClass;

    return (
        <button className={buttonClass}
                onClick={onClickHandler}
                disabled={disable}
        >
            {props.title}
        </button>
    )
}
