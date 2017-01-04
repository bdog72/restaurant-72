import React, { Component } from 'react'

class Home extends Component {
  render () {
    return <div>
      <h2>A little bit about the restaurant</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='pics1'>
        <img src='http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg' width='200' height='200' />
        <img src='http://i.huffpost.com/gen/1189942/images/o-CHECKERS-FRY-BURGER-facebook.jpg' width='200' height='200' />
      </div>
    </div>
  }
}

export default Home
