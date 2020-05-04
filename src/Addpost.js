import React, { Component } from 'react';
import { Form, Label, Input, Button } from 'reactstrap';

class Addpost extends Component {

    submit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: e.target[0].value, title: e.target[1].value, author: e.target[2].value })
        };
        fetch('http://localhost:3004/posts', requestOptions)
            .then(response => response.json())
    }

    render() {
        return (
            <>
                <Form onSubmit={this.submit}>
                    <div>
                        <Label>id:</Label>
                        <Input type="text" />
                    </div>

                    <div>
                        <Label>title:</Label>
                        <Input type="text" />
                    </div>

                    <div>
                        <Label>author:</Label>
                        <Input type="text" />
                    </div>

                    <div>
                        <Button> Add Me </Button>
                    </div>
                </Form>
            </>
        )
    }
}

export default Addpost;
