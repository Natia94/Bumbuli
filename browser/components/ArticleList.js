import React, {Component} from 'react'
import axios from 'axios'
import ArticleItem from './ArticleItem'

export default class ArticleList extends Component {
    constructor () {
        super ()
        this.state = {
            article: []
        }
    }

    async componentDidMount () {
        const response = await axios.get(`/wiki`)
        const data = response.data
        this.setState({ article: data }) 
    }
    
    render () {
        const articleItems = this.state.article.map((article => {
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
