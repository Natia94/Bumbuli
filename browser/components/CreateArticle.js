import React,{Component} from 'react'
import axios from 'axios'
import ArticleForm from './ArticleForm'


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
        this.addArticle = this.addArticle.bind(this)
    }

    handleChange (event) {

        this.setState({
            [event.target.name]: event.target.value
        });
        
    }

    async addArticle (newPost){
        
        try{
            console.log('hi')
            const post = await axios.post('/wiki', newPost)
            console.log('post', post)
            this.setState ({
               newPost: [...this.state, post]
            })
        }catch (err){
            console.log(err)
        }
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
        this.props.history.push('/')
    }

    render(){
        console.log('current', this.state.newPost)
        return(
        <div>
            <ArticleForm  handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} {...this.state}/>
        
       </div>

        )
    }
} 



