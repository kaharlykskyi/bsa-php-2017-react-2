import React from 'react'

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {user : {id: 1, name: ''}};
        this.buttonClick = this.buttonClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange() {
        this.state.user.name = this.refs.username.value;
        this.setState({user : this.state.user})
    }

    buttonClick() {
        if(this.state.user.name === '') {
            alert('Please input user name to add user');
        } else {
            this.props.addUser(this.state.user);
            this.setState({user: {
                id : this.state.user.id + 1,
                name : ''
            }});
        }
    }

    render() {
        let name = this.state.user.name;
        return (
            <div>
                <div className="col-md-6 col-md-offset-3">
                    <h3 className="text-success">Add new user: </h3>
                    <input
                        onChange={this.inputChange}
                        value={name}
                        ref="username"
                        className="form-control"
                        type="text"
                        placeholder="name"/>
                    <button
                        onClick={this.buttonClick}
                        className="btn btn-default">
                        Add user
                    </button>
                </div>

            </div>
        );
    }
}

export default AddUser;