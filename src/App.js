import React from 'react';
import AddUser from './add';
import UserList from './userlist';
import Search from './search';

//dumb
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <AddUser/>
                    <Search/>
                </div><hr/>
                <div className="row">
                    <UserList/>
                </div>
            </div>
        );
    }
}








