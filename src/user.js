import React from 'react'

export default class User extends React.Component {
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
                        <p><b>ID:</b> {user.id}</p>
                        <p><b>Name:</b> {user.name}</p>
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
