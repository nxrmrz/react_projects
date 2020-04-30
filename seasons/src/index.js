import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: ''}; //state object initialised   
    
    // stick data loading methods on here only, not in constructor (community convention)
    componentDidMount() {
            // first callback function is success, next is error. Success returns a coordinate object. We only need latitude for detecting whether northern/southern hemisphere
            window.navigator.geolocation.getCurrentPosition(
                (position) => this.setState({lat: position.coords.latitude}), 
                (err) => this.setState({ errorMessage: err.message }));
    }

    componentDidUpdate() {
        console.log('My component was just updated - it re-rendered!');
    }

    // all logic within an app should be refactored into functions!
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/> // re-renders itself when latitude changes 
        }

        else {
            return <Spinner message="Please Accept Location Request"/>
        }
    }
    //creates new class with unique implementation of render() method. Required
    render() {
        return (
            <div className="border-white">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));

