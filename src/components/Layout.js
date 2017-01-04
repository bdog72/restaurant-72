import React, { Component } from 'react'
import { Link } from 'react-router'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  render () {
    return <div className='layout'>
      <h1>Burger Dog</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/menu'>Menu</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>
            <Link to='/Locations'>Locations</Link>
          </li>
        </ul>
      </nav>
      <main>
        {this.props.children}
      </main>
      <footer>
        <p>&copy; 2017 The Majestic That. Built with &hearts; at the Iron Yard, in St Petersburg, Florida</p>
      </footer>
    </div>
  }
}
export default Layout
