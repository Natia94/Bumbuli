import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

export default class Article extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            article : []
        }
    }
    async componentDidMount () {
        const { match: { params } } = this.props;
        console.log('params', params)
        const response = await axios.get(`/wiki/${params.slug}`)
        console.log('response => ', response.data)
        const data = response.data
        this.setState({ article: data }) 
    }

    render (){
        //console.log('data => ', this.state.article)
        return (
            <div>
        
                <h1>Hi</h1>
              
            </div>
        )
    }
}
{/* <a href="/wiki/${page.slug}/edit" class="btn btn-primary">edit this page</a>
<a href="/wiki/${page.slug}/delete" class="btn btn-danger">delete this page</a> */}

