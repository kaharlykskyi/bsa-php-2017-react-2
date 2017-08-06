import React from 'react';
import { filterUser } from './actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {

    filter() {
        this.props.filterUser(this.searchInput.value);
    }

    render() {
        return(
            <div className="col-md-4 col-md-offset-1">
                <h3 className="text-success">Or search user: </h3>
                <input
                    onChange={this.filter.bind(this)}
                    ref={(input) => {this.searchInput = input}}
                    type="text"
                    className="form-control"
                    placeholder="Search name"
                />
            </div>
        );
    }
}

const SearchDispatch = connect(
    state => ({
        users: state
    }),
    dispatch =>
        bindActionCreators({ filterUser }, dispatch)
)(Search);

export default SearchDispatch;