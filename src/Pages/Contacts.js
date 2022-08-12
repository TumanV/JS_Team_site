import React, {Component} from 'react';
import { Form, Button, Container} from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '600px'}}>
                {/*отступ от Хедера*/}
                <h1 className="text-center" className="mt-5">Contact us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email aadress </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>
                            We`ll never share your email with anuone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Example textarea </Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </Container>
        );
    }
}

// export default Contacts;