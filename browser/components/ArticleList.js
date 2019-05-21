import React, {Component} from 'react'
import axios from 'axios'
import ArticleItem from './ArticleItem'

export default class ArticleList extends Component {
    constructor () {
        super ()
        this.state = {
            articles: []
        }
        this.addArticle = this.addArticle.bind(this)
    }

    async componentDidMount () {
        const response = await axios.get(`/wiki`)
        const data = response.data
        this.setState({ articles: data }) 
    }

    addArticle (newArticle){
        //I can not mutate the state so...
        this.setState({
            articles:[...this.state.articles, newArticle]
        })
    }
    
    render () {
        //console.log(this.state.articles)
        const articleItems = this.state.articles.map((article => {
            return (
                <ArticleItem key={article.id} article = {article} />
            )
        }))

        return (
          
            <div>
                <h1>ArticleList</h1>
                <ul className = "collection">{articleItems}</ul>
            </div>
        )
    }
}
