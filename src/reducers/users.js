//test initial data
const initialState = [
        {
            id: 1,
            name: 'Иванов'
        },
        {
            id: 2,
            name: 'Петров'
        },
        {
            id: 3,
            name: 'Сидоров'
        }
];

let startId = 4;

export default function users(state = initialState, action) {
    if (action.type === 'ADD_USER') {
        return [
            ...state,
            {
                id: startId++,
                name: action.name
           }
        ];
    } else if(action.type === 'DELETE_USER') {
        return state.filter(user => user.id !== action.id);
    }
    return state;
}