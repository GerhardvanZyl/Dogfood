import * as types from '../actions/actionTypes'

export default function storyReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_STORY:
            return [...state, {...action.story}];
            default:
                return state;
    }
}