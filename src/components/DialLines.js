import React, {Fragment} from 'react';

class DialLines extends React.Component {

    render() {

        return(
            <Fragment>
                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.seconds}deg)`, 
                                                background: `${this.props.colors.colorSeconds}`,
                                                height: "75px",
                                            }}>{this.props.seconds}
                </span>

                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.minutes}deg)`,
                                                background: `${this.props.colors.colorMinutes}`,
                                                height: "35px",
                                            }}>{this.props.minutes}
                </span>

                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.hours}deg)`,
                                                background: `${this.props.colors.colorHours}`,
                                                height: "15px",
                                            }}>{this.props.hours}
                </span>
            </Fragment>
        );
    }
}

export default DialLines;