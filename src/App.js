import React, { Component } from 'react';
import './App.scss'

export default class App extends Component{
  constructor(props){
      super(props);
  }
  render (){
    return (
      <>
        <header className='header'>
          <h1 className='title'>Hello and Welcome, React-Redux-Sass Starter kit is successfully build and your kit is ready to use</h1>
        </header>
        <section className='body'>                    
          
        </section>
        <footer className='header'>App Footer</footer>
      </>
    )
  }
}