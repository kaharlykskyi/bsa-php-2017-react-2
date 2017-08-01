import React from 'react'
import User from './user'

export default class UserList extends React.Component {
    render() {
        if (this.props.users.length === 0) {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <div className="alert alert-warning text-center">
                        <span><strong>There is no users!</strong></span><br/>
                        <span>Clear search field or add new users</span>
                    </div>
                </div>
            );
        } else {
            return (

                <div className="col-md-8 col-md-offset-2">
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
}
