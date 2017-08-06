import React from 'react';
import AddUser from './add';
import UserList from './userlist';
import Search from './search';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { users : [{
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
            }]
        };
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
    }

    save(user) {
        let users = this.state.users;
        users.push(user);
        this.setState( {users: users} );
    }

    remove(user) {
        let removed = this.state.users.filter(function(el) {
            return el.name !== user.name;
        });
        this.setState({users : removed});
    }

    filter(str) {
        this.setState({filter : str})
    }

    render() {
        let users = this.state.users;
        if (this.state.filter) {
            users = users.filter( user =>
                user.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase()))
        }
        return (
            <div className="container">
                <div className="row">
                    <AddUser
                        addUser={this.save}
                    />
                    <Search
                        onChange={this.filter.bind(this)}
                    />
                </div><hr/>
                <div className="row">
                    <UserList
                        users={users}
                        remove={this.remove}
                    />
                </div>
            </div>
        );
    }
}







