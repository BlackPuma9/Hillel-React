import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


class Progress extends React.Component {
    render() {
        const { percentage } = this.props
        return <ProgressBar now={percentage} label={`${percentage}%`}/>
    }
}

export default Progress