import React from 'react';
import DialLines from './DialLines';

class App extends React.Component {

    state = {
        seconds : new Date().getSeconds(),
        minutes: new Date().getMinutes(),
        hours: new Date().getHours(),
        color: 0x0
    };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            hours: new Date().getHours(),
            color: this.getHexColor()
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getHexColor() {
        // TOD0 : Get hex color based on time and date
    }

    updateHexColor(updatedColor) {
        let color = {...this.state.color};
        color = updatedColor;
        this.setState({color});
    }

    render() {
        
        return (
            <div className="dial" style={{border: `6px solid #515151`}}>
                <DialLines
                    seconds = {this.state.seconds}
                    minutes = {this.state.minutes}
                    hours = {this.state.hours}
                />
            </div>
        );
    }
}

export default App;