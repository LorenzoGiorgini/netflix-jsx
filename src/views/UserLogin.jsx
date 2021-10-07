import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Col, Row } from "react-bootstrap"


const UserLogin = () => {

    const [user , setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        city: "",
        street: "",
        zipcode: "",
        creditcard: ""
    })


    return(
        <div className="spacer">
            <Row style={{marginTop: "100px" , color: "white"}}>
                <Col>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="Name" 
                            placeholder="Enter Name" 
                            value={user.name}
                            onChange={(e) => setUser('name', e.target.value)}

                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="Name" placeholder="Enter Surname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="Name" placeholder="City" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type="Name" placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="Name" placeholder="Zip Code" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Credit Card</Form.Label>
                            <Form.Control type="Name" placeholder="Credit Card" />
                        </Form.Group>

                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </div>
    )
}



export default UserLogin