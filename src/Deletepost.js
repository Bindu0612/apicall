import React, { Component } from 'react';
import { Form,Button } from 'reactstrap';

class Deletepost extends Component {

    deletePost = (e) => {
        console.log(e.target[0]);
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.state.id,
                title: e.target[0],
                author: e.target[1],
            })
        };

        const url = `http://localhost:3004/posts/${this.props.match.params.id}`;

        fetch(url, requestOptions)
            .then(response => response.json())
    }

    render() {
        const { id, title, author } = this.props.match.params;
        console.log(id, title, author);
        return (
            <>
                <Form >
                    <div>
                        <Button onClick={this.deletePost}> Delete Me </Button>
                    </div>
                </Form>
            </>
        )
    }
}

export default Deletepost;
