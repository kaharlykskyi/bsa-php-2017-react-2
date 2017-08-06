const initialState = '';

export default function filter(state = initialState, action) {
    if (action.type === 'FILTER_USERS') {
        return action.name;
    }
    return state;
}