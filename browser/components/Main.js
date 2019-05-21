import React from 'react'
import {Switch, Route } from 'react-router-dom'
import ArticleDetails from './ArticleDetails'
import ArticleList from './ArticleList'
import EditForm from './EditForm'
import AuthorsList from './AuthorsList';
import FilteredArticles from './FilteredArticles'
import CreateArticle from './CreateArticle';

export default class Main extends React.Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={CreateArticle} />
          <Route exact path='/wiki/add' component={ArticleList}/>
          <Route exact path='/wiki/authors' component={AuthorsList}/>
          <Route exact path='/authors/:userId' component={FilteredArticles}/>
          <Route exact path='/wiki/:slug' component={ArticleDetails}/>
          <Route exact path='/wiki/edit/:slug' component={EditForm}/>
        </Switch> 
      </main>
    )
  }
}
