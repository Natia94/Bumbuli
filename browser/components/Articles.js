import React from 'react'
import CreateArticle from './CreateArticle'
import ArticleItem from './ArticleItem';


export default class Articles extends Component {

    constructor (){
        super ()
        this.state = {
            articles: []
        }
        this.addArticle = this.articles.bind(this)
    }

    addArticle (newArticle){
        this.setState ({
        articles: [...this.state.articles, newArticle]
        })
    }
    render () {
        return (
            <div>
               <CreateArticle addArticle = {this.addArticle} />
                {/* {
                    this.state.articles.map(article => <ArticleItem article={article} key={article.id} />)
                } */}
            </div>
        )
    }

}