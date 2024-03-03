import React from "react"
import Table from "react-bootstrap/Table";

class List extends React.Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>AcceptRules</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.email}</td>
                    <td>{this.props.password}</td>
                    <td>{this.props.address}</td>
                    <td>{this.props.city}</td>
                    <td>{this.props.country}</td>
                    <td>{Boolean(this.props.acceptRules).toString()}</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}

export default List
