import React from 'react';
// put imports for dependencies above components
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    // either '', null, [], or {}. put in the appropriate one
    state = { images: [] };

    // has a promise object/async await. can be seen as a 'tap on the shoulder' once the async function is done
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos',{
            params: { query: term},
        });
        this.setState({ images: response.data.results})
    }

    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
            {/* can call a prop of a component anything we want, but a JSX property specific names! */}
            <SearchBar onSubmit={this.onSearchSubmit}/> 
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}

export default App;

