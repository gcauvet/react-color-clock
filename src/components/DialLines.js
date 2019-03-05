import React, {Fragment} from 'react';

class DialLines extends React.Component {

    render() {
        return(
            <Fragment>
                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.seconds}deg)`, 
                                                background: "#fa6161",
                                                height: "75px",
                                            }}>
                </span>

                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.minutes}deg)`,
                                                background: "#fa6161",
                                                height: "35px",
                                            }}>
                </span>

                <span className="dialLine" style={{
                                                transform: `rotate(${6 * this.props.hours}deg)`,
                                                background: "#fa6161",
                                                height: "15px",
                                            }}>
                </span>
            </Fragment>
        );
    }
}

export default DialLines;