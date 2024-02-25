import React from "react";

class HelloMessage extends React.Component {
    render() {
        return <h3 {...this.props}><i>Hello</i></h3>
    }
}

export default HelloMessage