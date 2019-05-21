import React, {Component} from 'react'
import axios from 'axios'
import ArticleItem from './ArticleItem'


export default class FilteredArticles extends Component {
    constructor () {
        super ()
        this.state = {
            data: {
                user:{},
                pages:[]
            }
        }
    }

    async componentDidMount () {
        console.log ('hit didMount')
        const { match: { params } } = this.props;
        console.log('params', params)

        const response = await axios.get(`/users/${params.userId}`)
        const data = response.data
        console.log ('data => ', data)

        this.setState({ data: data }) 
    }

    render () {
        let user = this.state.data.user
        let pages = this.state.data.pages
        console.log('pages', pages)

        const articleItems = pages.map((article => {
            return (
            <ArticleItem key={article.id} article = {article} />
            )
        }))
        console.log ('articleItems', articleItems)

        return (
            <div>
                <h1>ArticleList</h1>
                <ul className = "collection">{articleItems}</ul>
            </div>
        )
    }
}
