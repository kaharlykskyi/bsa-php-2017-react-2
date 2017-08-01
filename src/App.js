import React from 'react'
import AddUser from './add'
import UserList from './userlist'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { users : [{
                id: 1,
                name: 'Mike'
            },
            {
                id: 2,
                name: 'Stepan'
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

    filter() {
        this.setState({filter : this.refs.search.value})
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
                    <div className="col-md-4 col-md-offset-1">
                        <h3 className="text-success">Or search user: </h3>
                        <input
                            onChange={this.filter.bind(this)}
                            ref="search"
                            type="text"
                            className="form-control"
                            placeholder="Search name"
                        />
                    </div>
                </div><hr/>
                <div className="row">
                    <UserList
                        users={users}//this.state.users}
                        remove={this.remove}
                    />
                </div>
            </div>
        );
    }
}







