import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ArticleForm from './ArticleForm'
import Article from './Article'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <div className='column container'>

            <div id='header'>
              <h1>BumBuli</h1>
            </div>

          <Navbar />

          </div>
          {/* write an article */}
            <Route exact path='/add' component={ArticleForm}/>
            <Route exact path='/wiki/:slug' component={Article}/>
        </div>
          
        <Footer />
      </Router> 
    )
  }
}
