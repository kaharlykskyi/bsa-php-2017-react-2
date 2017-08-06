import React from 'react';
import User from './user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteUser } from './actions/actions';

class UserList extends React.Component {
    render() {
        if (this.props.users.length === 0) {
            return (
                <div className="col-md-6 col-md-offset-3">
                    <div className="alert alert-warning text-center">
                        <span><strong>There is no users!</strong></span><br/>
                        <span>Clear search field or add a new users</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-md-8 col-md-offset-2">
                    {this.props.users.map(user =>
                        <User
                            id = {user.id}
                            key={'user-' + user.id}
                            name={user.name}
                            remove={() => this.props.deleteUser(user.id)}
                        />)}
                </div>
            );
        }
    }
}

const ListUserDispatch = connect(
    (state) => ({
        users: state.users.filter(user =>
            user.name.toLowerCase()
                .includes(state.filter.toLowerCase())
        )
    }),
   (dispatch) =>
        bindActionCreators({ deleteUser }, dispatch)
)(UserList);

export default ListUserDispatch;

