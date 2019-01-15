import React, { Component } from "react";
import API from "../../utils/API";
import './Stacks.css'

class Stacks extends Component {
  // Setting our component's initial state
  state = {
    stacks: [],
    summary: "",
    url: "",
    isSaved: false,
    pageName: "REACT SCRAPER"
  };


  displaysave = () => {
    this.setState( {pageName: "SAVED ARTICLE"} )
    API.getsaveArticles()
    .then(res => this.setState({ stacks: res.data }))
    .catch(err => console.log(err))
  }

  displayscrape = () => {
     this.setState( {pageName: "REACT SCRAPER"} )
     API.getArticles()
      .then(res => this.setState({ stacks: res.data }))
      .catch(err => console.log(err))
  }

  saveArticle = id => {
    console.log(id)
    API.saveArticle(id)
      .then(res => this.displaysave())
      .catch(err => console.log(err))
  }

  render() {
    return (
          <>
          <nav className="blue" role="navigation">
                  <div className="nav-wrapper container">
                      <a id="logo-container" href="#" className="brand-logo">React Scraper</a>
                      <ul className="right hide-on-med-and-down">
                      <li><a href="/">Home</a></li>
                      <li><button onClick={() => this.displaysave()} className="waves-effect waves-light green btn-large" id="saved-btn">Saved Articles</button></li>
                      <li><button onClick={() => this.displayscrape()} className="waves-effect waves-light red btn-large" id="scrape-btn">Scrape New Articles</button></li>
                      </ul>
              
                      <ul id="nav-mobile" className="sidenav">
                      <li><a href="#">Navbar Link</a></li>
                      </ul>
                      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  </div>
          </nav>

          <div id="index-banner" className="parallax-container">
              <div className="section no-pad-bot">
                  <div className="container">
                  <h1 className="header center teal-text text-lighten-2">{this.state.pageName}</h1>
                  <div className="row center">
                      <h5 className="header col s12 light">NEW YORK TIMES EDITION</h5>
                  </div>     
                  </div>
              </div>
          </div>
          <div className="orange lighten-3" id="newscontainer">
              {this.state.stacks.length ? (
                  <div className="row">
                      {
                        this.state.stacks.map(stack => (                                            
                            <div className="col s12">
                            <div className="card blue darken-1">
                                <div className="card-content white-text" >                                                 
                                    <span className="card-title">
                                    <div id="newstitle" key={stack._id}>
                                        {stack.title} 
                                        { (this.state.pageName === 'REACT SCRAPER') ? (
                                          <button onClick={() => this.saveArticle(stack._id)} className="btn waves-effect waves-light" id="save-article" type="submit" name="action" dataid={stack._id}>Save</button>
                                        ) : (
                                          <button className="btn waves-effect waves-light" id="delete-article" type="submit" name="action" dataid={stack._id}>Delete</button>
                                        )
                                        }
                                    </div>
                                    </span>
                                </div>
                                <div className="card-action white">
                                    <p>{stack.summary}</p>
                                    <a href={stack.url}>link to article</a>                              
                                </div>                             
                            </div>                             
                            </div>                                               
                          )
                        )
                    }   
                </div>    
              ) : (
                <div>
                {(this.state.pageName === 'REACT SCRAPER') ? (
                    <p>Welcome to the page! Please scrape your article!</p>
                  ) : (
                    <p>No saved article found!</p>
                  )
                }
                </div>
              )}  
          </div> 
        </>   
    );
  }
}

export default Stacks ;
