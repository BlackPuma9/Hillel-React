import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {btnClicked: 0}
    }
    render() {

        return (
            <ButtonGroup aria-label="BtnGroup">
                <Button
                    variant="secondary"
                    className="left"
                    disabled={this.state.btnClicked === 1}
                    onClick={() => {this.setState({btnClicked: 1})}}
                >
                    Left
                </Button>
                <Button
                    variant="secondary"
                    className="right"
                    disabled={this.state.btnClicked === 2}
                    onClick={() => {this.setState({btnClicked: 2})}}
                >
                    Right
                </Button>
            </ButtonGroup>
        )
    }
}

export default BtnGroup