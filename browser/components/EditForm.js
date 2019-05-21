import React,{Component} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'


export default class EditForm extends Component {

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
        //this.editArticle = this.addArticle.bind(this)
    }


    async componentDidMount () {
        try {
            const { match: { params } } = this.props;
            console.log()
            await axios.get(`/wiki/${params.slug}`)
            .then (response => {
                this.setState({ 
                    name: response.data.author.name,
                    email: response.data.author.email,
                    title: response.data.page.title,
                    tags: response.data.page.tags,
                    content: response.data.page.content
                }, ()=>{
                    console.log('state => ', this.state)
                }) 
            })
        }catch(err){
            console.log(err)
        }   
    }

    async editArticle (newPost){
        console.log('hit the edit article')
        const { match: { params } } = this.props;
        console.log('params.slug', params.slug)
        try{
            await axios.put(`/wiki/${params.slug}`, newPost)
        }catch (err){
            console.log(err)
        }
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        }); 
    }
    
    handleSubmit (event){
        event.preventDefault()
        this.editArticle(this.state);
        this.setState = ({
            name:'',
            email:'',
            title:'',
            tags:'',
            content:''
        })
        this.props.history.push('/')
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

            <Button variant="info" type="submit">Update</Button>

        </Form>

    </div>

        )
    }
} 



