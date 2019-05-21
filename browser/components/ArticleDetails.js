import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ArticleDetails extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            article : {
                page: {},
                author: {}
            }
        }
    }

    async componentDidMount () {
        try{
            const { match: { params } } = this.props;
            const response = await axios.get(`/wiki/${params.slug}`)
            const data = response.data
            //console.log(data)
            this.setState({ article: data }) 
        }catch(err){
            console.log(err)
        }   
    }

    onDelete(){
        try{
            let slug = this.state.article.page.slug
            console.log('deleted slug is =>', slug)
            axios.delete(`wiki/${slug}/delete`)
            this.props.history.push ('/')
        }catch(err){
            console.log(err)
        }
    }

    render (){
        const article = this.state.article
        const page = article.page
        const author = article.author
        console.log(page, author)
        return (
            <div>

                <Link className="btn grey" to="/"> Back </Link>
                <h2>About Article </h2>

                <h4>Author</h4>
                <ul className="collection">
                    <li className="collection-item">Name: {author.name}</li>
                    <li className="collection-item">Email: {author.email}</li>
                </ul>

                <h4>Article</h4>
                <ul className="collection">
                    <li className="collection-item">Title: {page.title}</li>
                    <li className="collection-item">Tags: {page.tags}</li>
                    <li className="collection-item">Content: {page.content}</li>
                </ul>

                <Link className = "btn" to = {`/wiki/edit/${page.slug}`}> edit </Link>
                <button onClick = {this.onDelete.bind(this)} className = "btn red right"> delete </button>
               
            </div>
        )
    }
}


