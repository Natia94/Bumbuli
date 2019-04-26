import React,{Component} from 'react'
import axios from 'axios'

export default class ArticleForm extends Component {

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
        this.addArticle = this.addArticle.bind(this)
    }

    handleChange (event) {
        this.setState = ({
            [event.target.name] : event.target.value
        })
        
    }

    async addArticle (newPost){
        await axios.post ('/wiki', newPost)
    }

    handleSubmit (event){
        event.preventDefault()
        this.addArticle(this.state);
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
        <h1> Fill out the form</h1>
        <form onSubmit={this.handleSubmit}>

            <label>
            Name: 
            <input
                type="text"
                name="name"
                onChange = {this.handleChange}
                value = {this.state.name}
            />
            </label>

            <label>
            Email:
            <input
                type="text"
                name="email"
                onChange = {this.handleChange}
                value = {this.state.email}
            />
            </label>

            <label>
            Title
            <input
                type="text"
                name="title"
                onChange = {this.handleChange}
                value = {this.state.title}
            />
            </label>

            <label>
            Tags
            <input
                type="text"
                name="tags" 
                onChange = {this.handleChange}
                value = {this.state.tags}
                />
            </label>

            <label>
            Content
            <input
                type="text"
                name="content"
                onChange = {this.handleChange}
                value = {this.state.content}
                />
            </label>

            <button type="submit">Submit New Student</button>

        </form>
        </div>

        )
    }
} 



