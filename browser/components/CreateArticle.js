import React,{Component} from 'react'
import axios from 'axios'
//import ArticleForm from './ArticleForm'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'

export default class CreateArticle extends Component {

    constructor(props){
        super(props)
            this.state = {
                name:'',
                email:'',
                title:'',
                tags:'',
                content:''
            }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.addNewArticle = this.addNewArticle.bind(this)
    }

    handleChange (event) {

        this.setState({
            [event.target.name]: event.target.value
        });
        
    }

    addNewArticle(newPost){
        try{
            axios.post('/wiki', newPost) 
            this.props.history.push('/wiki/add')
        }catch (err){
            console.log(err)
        }
    }

    handleSubmit (event){
        event.preventDefault()
        this.addNewArticle(this.state)
        this.setState = ({
            name:'',
            email:'',
            title:'',
            tags:'',
            content:''
        })
        
    }

    render(){
        return(
        <div>
           <Form onSubmit={this.handleSubmit} className = "container">
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Name" 
                    name="name"
                    onChange = {this.handleChange}
                    value = {this.state.name}
                />
            
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  
                    
                    type="email" placeholder="Enter Password" 
                    name="email"
                    onChange = {this.handleChange}
                    value = {this.state.email}
                />
            </Form.Group>

            <Form.Group controlId="formGroupTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Title" 
                    name="title"
                    onChange = {this.handleChange}
                    value = {this.state.title}
                />
            </Form.Group>
            <Form.Group controlId="formGroupTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control  
                    type="text" placeholder="Enter Tags" 
                    name="tags" 
                    onChange = {this.handleChange}
                    value = {this.state.tags}
                />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows="10" 
                    type="text"
                    name="content"
                    onChange = {this.handleChange}
                    value = {this.state.content}
                />
            </Form.Group>

            <Button variant="info" type="submit">Submit</Button>

        </Form>
       </div>

        )
    }
} 



