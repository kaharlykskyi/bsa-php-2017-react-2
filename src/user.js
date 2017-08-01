import React from 'react'

class User extends React.Component {
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove() {
        this.props.remove(this.props.user);
    }

    render() {
        let user = this.props.user;
        return (
            <div className="user">
                <div className="col-md-8">
                    <div className="info">
                        <p><b>id:</b> {user.id}</p>
                        <p><b>name:</b> {user.name}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button
                        onClick={this.remove}
                        className="btn btn-danger">Delete user
                    </button>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default User