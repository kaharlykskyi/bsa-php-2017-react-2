import React from 'react'

export default class User extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="col-md-8">
                    <div className="info">
                        <p><b>ID:</b> {this.props.id}</p>
                        <p><b>Name:</b> {this.props.name}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button
                        onClick={ this.props.remove }
                        className="btn btn-danger">Delete user
                    </button>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}
