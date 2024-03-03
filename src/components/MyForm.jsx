import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Table from "react-bootstrap/Table"
import classNames from "classnames"


class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
            showForm: true
        };
    }

    handlerEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlerPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handlerAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    handlerCity = (e) => {
        this.setState({ city: e.target.value })
    }

    handlerCountry = (e) => {
        this.setState({ country: e.target.value })
    }

    handlerAcceptRules = (e) => {
        this.setState({ acceptRules: e.target.checked })
    }

    render() {
        const formClass = classNames({
            "d-none": !this.state.showForm
        })

        const tableClass = classNames({
            "d-none": this.state.showForm
        })
        return (
            <div className="container">
                <div className={formClass}>
                    <h1 className="text-center">Registration Form</h1>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault()
                            this.setState({showForm: !this.state.showForm})
                        }
                    }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={this.handlerEmail}
                                value={this.state.email}
                                placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={this.handlerPassword}
                                value={this.state.password}
                                placeholder="Password"/>
                        </Form.Group>

                        <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Address">
                            <Form.Control
                                as="textarea"
                                onChange={this.handlerAddress}
                                value={this.state.address}
                                style={{height: '100px'}}
                            />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={this.handlerCity}
                                value={this.state.city}
                                placeholder="City"/>
                        </Form.Group>

                        <FloatingLabel className="mb-3" controlId="floatingSelect" label="Country">
                            <Form.Select
                                onChange={this.handlerCountry}
                                value={this.state.country}
                                aria-label="Floating label select example">
                                <option value="">Open this select menu</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="USA">USA</option>
                            </Form.Select>
                        </FloatingLabel>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                onChange={this.handlerAcceptRules}
                                checked={this.state.acceptRules}
                                label="Accept Rules"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">Sign in</Button>
                    </Form>
                </div>

                <div className={tableClass}>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => this.setState({showForm: !this.state.showForm})}
                    >
                        Back
                    </Button>
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
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.address}</td>
                            <td>{this.state.city}</td>
                            <td>{this.state.country}</td>
                            <td>{Boolean(this.state.acceptRules).toString()}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>

            </div>

        )
    }
}

export default MyForm