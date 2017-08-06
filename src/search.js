import React from 'react';

export default class Search extends React.Component {

    filter(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return(
            <div className="col-md-4 col-md-offset-1">
                <h3 className="text-success">Or search user: </h3>
                <input
                    onChange={this.filter.bind(this)}
                    ref="search"
                    type="text"
                    className="form-control"
                    placeholder="Search name"
                />
            </div>
        );
    }
}