import { createStore } from "redux"

const initialState = {
    open: false,
    singleIndex: 0,
    currentPage: 1,
    searchValu:'',
    searching:[],
    dateRange: [null, null],
    firstDate: 0, 
    valid : {
        name : '',
        surname : '',
        login : '',
        password : ''
    },
}

const reducer = (state=initialState, action)=>{
    if(action.type === 'GET__INDEX'){
        return {...state, singleIndex:action.payload}
    }
    if(action.type === 'CHANGE_VALID') {
        return {...state, valid : {...state.valid, [action.payload.key] : action.payload.value}}
    }
    if(action.type === 'STORAGE') {
        return {...state, open : action.payload}
    }
    if(action.type === 'SEARCHING__VAL'){
        return {...state, searchValu:action.payload}
    }
    if(action.type === 'SEARCHING'){
        return {...state, searching:action.payload}
    }
    if(action.type === 'CHANGE__CURRENT__PAGE'){
        return {...state, currentPage:action.payload}
    }
    if(action.type === 'FIRST__DATE'){
        return {...state, firstDate:action.payload}
    }
    

return state
}

export const store = createStore(reducer)