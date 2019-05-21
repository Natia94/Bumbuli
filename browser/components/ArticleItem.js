import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ArticleItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          article : props.article
        }
    }
    render () {
        return (
            <li className="collection-item">
             <Link to = {`/wiki/${this.state.article.slug}`}> {this.state.article.title} </Link>
            </li>
        )
    }
}

export default ArticleItem

