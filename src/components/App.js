import React from 'react';
import DialLines from './DialLines';

class App extends React.Component {

    state = {
        seconds : new Date().getSeconds(),
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        colors: {}
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            hours: new Date().getHours(),
            colors: this.getHexColor()
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getHexColor() {

        let colors = {
            colorSeconds: `#${Math.floor(Date.now()/1000 - this.state.hours * 3600 - this.state.minutes * 60 - this.state.seconds).toString(16).slice(-6)}`,
            colorMinutes: `#${Math.floor(Date.now()/1000 - this.state.hours * 3600 - this.state.minutes * 60).toString(16).slice(-6)}`,
            colorHours: `#${Math.floor(Date.now()/1000 - this.state.hours * 3600).toString(16).slice(-6)}`,
            colorDialBorder: `#${Math.floor(Date.now()/1000).toString(16).slice(-6)}`,
        };

        return colors;
    }

    render() {

        return (
            <div className="dial" style={{border: `6px solid ${this.state.colors.colorDialBorder}`}}>
                <DialLines
                    seconds = {this.state.seconds}
                    minutes = {this.state.minutes}
                    hours = {this.state.hours}
                    colors = {this.state.colors}
                />
            </div>
        );
    }
}

export default App;