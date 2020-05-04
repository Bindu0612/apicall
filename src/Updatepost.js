import React, {Component} from 'react';
import {Form,Label,Input,Button} from 'reactstrap';

class Deletepost extends Component{
    constructor (props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            title: this.props.match.params.title,
            author: this.props.match.params.author
        }
    }

    updateValues =(e)=>{
        this.setState({ [ e.target.name ]: e.target.value})
    }
    
    submit = (e)=>{
        e.preventDefault();
        console.log(e.target[0].value);


    const requestOptions = {
             method: 'PUT',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify( {
                id: this.state.id,
                title : e.target[0].value,
                author: e.target[1].value
              })                           
    };

    const url = `http://localhost:3004/posts/${this.state.id}`;

    fetch(url , requestOptions)        
        .then(response => response.json())
    }

    render(){
     const {id,title,author} = this.props.match.params;
        console.log(id,title,author);
        return(
            <>
            <Form onSubmit = {this.submit }>

                <div>
                    <Label>title:</Label>
                    <Input type ="text" name = "title" value = {this.state.title} onChange = {this.updateValues} />
                    </div>

            <div>
            <Label>author:</Label>
            <Input type ="text" name = "author" value = {this.state.author} onChange = {this.updateValues}/>
            </div>

            <div>
            <Button> Add Me </Button>
            </div>
</Form>
            </>
        )
    }
}

export default Deletepost;
