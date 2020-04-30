import React from 'react';

// class based component because we need state for this component - handling user input

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = event => {
        // dont want the form to automatically submit itself when user presses Enter button
        event.preventDefault();

        this.props.onSubmit(this.state.term);  
    };

    render () {
        return (<div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                {/* no parentheses for this.onInputChange
                (i.e. onChange={this.onInputChange}) because we 
                would only wanna call it when there's a change and not when the 
                component renders
                 */}
                 {/* Alternative way of deifning event handler: one line arrow function 
                 by passing in the search term as a value to <input>, we are changing 
                 it to a controlled element
                 */}
                <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
            </div>
        </form>
        </div>
        );
    }
}

export default SearchBar;