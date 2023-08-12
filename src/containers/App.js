import React from 'react';
import { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({ robots: users}))
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ? 
        
        <h1>Loading</h1> :

        (
            <div className='tc'>
                <h1 className='f1'>Tin Cans</h1>
                <SearchBox  SearchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
    
}

export default App;