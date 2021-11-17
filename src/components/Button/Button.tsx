import s from './Button.module.css'
import {settingType} from '../../App';

type ButtonsPropsType = {
    title: string
    currentNumber: number
    onClick: (number: number) => void
    settingParameters: settingType[]
}

export const Button = (props: ButtonsPropsType) => {
    const onClickHandler = () => {
        props.onClick(props.currentNumber);
    }

    let disable: boolean;
    switch (props.title) {
        case 'inc':
            disable = props.currentNumber === props.settingParameters[0].value;
            break;
        case 'reset':
            disable = props.currentNumber === props.settingParameters[1].value;
            break;
        default:
            disable = false;
            break;
    }

    const buttonClass = disable ? `${s.usual} ${s.disabled}` : s.usual;

    return (
        <button className={buttonClass} onClick={onClickHandler} disabled={disable}>
            {props.title}
        </button>
    )
}
