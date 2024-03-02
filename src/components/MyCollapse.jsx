import React from "react";
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
class MyCollapse extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: props.opened }
    }
    render() {
        return (
            <>
                <Button
                    onClick={() => this.setState({open: !this.state.open})}
                    aria-controls="example-collapse-text"
                    aria-expanded={this.state.open}
                >
                    click
                </Button>
                <Collapse in={this.state.open}>
                    <div id="example-collapse-text">
                        {this.props.text}
                    </div>
                </Collapse>
            </>
        );
    }
}

export default MyCollapse