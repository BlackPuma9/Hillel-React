import React from "react";
import { Children } from 'react';
import {ListGroup} from "react-bootstrap";

class MyList extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <ListGroup as="ol">
                {Children.map(children, (child) => {
                    return (
                        <ListGroup.Item as='li'>
                            {child}
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        )
    }
}

export default MyList