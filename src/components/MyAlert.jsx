import React from "react";
import Alert from 'react-bootstrap/Alert';


class MyAlert extends React.Component {
    render() {
        const {type, text} = this.props
        return (
            <div>
                <Alert variant={type}>{text}</Alert>
            </div>
        )
    }
}

export default MyAlert