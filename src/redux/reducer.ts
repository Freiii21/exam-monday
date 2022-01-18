import {Dispatch} from 'redux';

type settingType = {
    title: string
    value: number
}
export type settingsType = {
    max: settingType
    start: settingType
}
export type SettingsStateType = {
    currentNumber: number
    settingParameters: settingsType
    errorMaxValue: boolean
    errorStartValue: boolean
    editMode: boolean
}

const initialState: SettingsStateType = {
    currentNumber: 0,
    settingParameters: {
        max: {
            title: "max value:",
            value: 5,
        },
        start: {
            title: "start value:",
            value: 0,
        }
    },
    errorMaxValue: false,
    errorStartValue: false,
    editMode: false
};
type ActionsType = IncCounterAT | ResetCounterAT | SetSettingsAT;

export const Reducer = (state:SettingsStateType = initialState, action: ActionsType): SettingsStateType => {
    switch (action.type) {
        case 'INC-COUNTER':
            if (state.currentNumber < state.settingParameters.max.value) {
                let newNum = state.currentNumber + 1;
                return {
                    ...state,
                    currentNumber: newNum
                }
            }
            return state;
        case 'RESET-COUNTER':
            return {
                ...state,
                currentNumber: state.settingParameters.start.value
            };
        case 'SET-SETTINGS':
            return {
                ...state,
                editMode: false,
                currentNumber: state.settingParameters.start.value
            }
        default:
            return state;
    }
}

export type IncCounterAT = {
    type: "INC-COUNTER"
}
export type ResetCounterAT = {
    type: "RESET-COUNTER"
}
export type SetSettingsAT = {
    type: "SET-SETTINGS"
}

export const incCounterAC = ():IncCounterAT => ({type: 'INC-COUNTER'});
export const resetCounterAC = ():ResetCounterAT => ({type: 'RESET-COUNTER'});
export const setSettingsAC = ():SetSettingsAT => ({type: 'SET-SETTINGS'});

export const setNewSettings = (settingParameters: settingsType) => {
    return (dispatch:Dispatch) => {
        localStorage.setItem('counterValues',JSON.stringify(settingParameters))
        dispatch(setSettingsAC());
    }
}