export const addUser = (name) => ({
    type: 'ADD_USER',
    name: name
});

export const deleteUser = (id) => ({
    type: 'DELETE_USER',
    id: id
});

export const filterUser = (name) => ({
    type: 'FILTER_USERS',
    name: name
});