import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AuthorItem extends Component{
    constructor(props){
        super(props);
        this.state = {
          author : props.author
        }
    }
    render () {
        return (
            <li className="collection-item">
             <Link to = {`/authors/${this.state.author.id}`}> {this.state.author.name} </Link>
            </li>
        )
    }
}

export default AuthorItem

