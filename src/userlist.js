import React from 'react'
import User from './user'

class UserList extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                {this.props.users.map(user =>
                    <User
                        key={user.id}
                        user={user}
                        remove={this.props.remove}
                    />)}
            </div>
        );
    }
}

export default UserList