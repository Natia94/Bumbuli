import React, {Component} from 'react'
import axios from 'axios'
import AuthorItem from './AuthorItem'
export default class AuthorsList extends Component {
    constructor () {
        super ()
        this.state = {
            authors: []
        }
    }

    async componentDidMount () {
        const response = await axios.get(`/users`)
        const data = response.data
        console.log ('data =>', data)
        this.setState({ authors: data }) 
    }
    
    render () {
        const authorItems = this.state.authors.map((author => {
            return (
                <AuthorItem key={author.id} author = {author} />
            )
        }))

        return (
            <div>
                <h1>Authors</h1>
                <ul className = "collection">{authorItems}</ul>
            </div>
               
        )
    }
}