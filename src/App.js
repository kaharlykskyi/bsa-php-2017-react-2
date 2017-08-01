import React from 'react'
import AddUser from './add'
import UserList from './userlist'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users : []
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <AddUser
                        addUser={this.save}
                    />
                </div><hr/>
                <div className="row">
                    <UserList
                        users={this.state.users}
                        remove={this.remove}
                    />
                </div>
            </div>
        );
    }
}


export default App































/*class App extends React.Component {
    constructor() {
        super();
        this.state = {items: []}
    }
    componentWillMount(){
        fetch('http://swapi.co/api/people/?format=json')
            .then( response => response.json())
            .then(({results: items}) => this.setState({items}))
    }
    filter(e) {
        this.setState({filter : e.target.value})
    }
    render(){
        let items = this.state.items;
        if (this.state.filter) {
            items = items.filter( item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type="text"
                    onChange={this.filter.bind(this)}
                />
                {items.map(item => <Person key={item.name} person={item}/>)}
            </div>
        );
    }
}

class Person extends React.Component {
    render() {
        let bd = this.props.person.birth_year;
        let name = this.props.person.name;
        return (
            <div className="panel">
                <h4><span className="text-success">Name: </span>{name}</h4>
                <p><span className="text-success">Bday: </span>{bd}</p>
            </div>
        );
    }
}

App.defaultProps = {val: 0};*/



















// App props strict types

/*App.propTypes = {
    text : React.PropTypes.string,
    cat : React.PropTypes.number.isRequired
};*/

// Default props values

/*App.defaultProps = {
    text : "this is a default value"
};*/

