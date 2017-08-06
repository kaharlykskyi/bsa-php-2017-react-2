import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from './actions/actions';

class AddUser extends React.Component {
    buttonClick() {
        if(this.username.value === '') {
            alert('Please input user name to add user');
        } else {
            this.props.addUser(this.username.value);
            this.username.value = '';
        }
    }

    render() {
        return (
            <div>
                <div className="col-md-4 col-md-offset-1">
                    <h3 className="text-success">Add new user: </h3>
                    <input
                        ref={(input) => {this.username = input}}
                        className="form-control"
                        type="text"
                        placeholder="Enter name"/>
                    <button
                        type="button"
                        onClick={this.buttonClick.bind(this)}
                        className='btn btn-primary' >
                        Add user
                    </button>
                </div>
            </div>
        );
    }
}


const AddUserDispatch = connect(
    (state) => ({
        users: state
    }),
    (dispatch) =>
        bindActionCreators({addUser} , dispatch)
)(AddUser);

export default AddUserDispatch;




