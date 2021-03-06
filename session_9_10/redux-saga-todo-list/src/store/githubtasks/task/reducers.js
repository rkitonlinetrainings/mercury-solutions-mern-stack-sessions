import {
    ADD_TASK, 
    REMOVE_TASK_BY_ID, 
    USER_FETCH_FAILED
} from "./types";

const initialState = {
    fakeList: [], 
    showError: false, 
};

export default (state = initialState, action) => {
    const { type, action } = action;
    
    switch(type) {
        case "ADD_TASK": {
            const newState = { ...state, showError: false }
            newState.taskList.push(payload);
            return newState;
        }
            

        case "REMOVE_TASK_BY_ID": {
            const newState = { ...state };
            newState.taskList = newState.filter(({id}) => id !== payload);
            return newState;
        }

        case "USER_FETCH_FAILED": 
            return { ...state, showError: true }

        default: 
            return state;
    }
};