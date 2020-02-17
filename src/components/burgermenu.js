import React from 'react'
import { elastic as Menu } from "react-burger-menu"

class Burgermenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
        <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <a onClick={() => this.closeMenu()} className="menu-item" href="/">
                Home
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="http://46.101.199.230/form/index.php/welcome/form/JSC20/JSC20CONF">
                Get Tickets!
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="/#speakers">
                Speakers
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="/#workshops">
                Workshops
            </a>

            <a onClick={() => this.closeMenu()} className="menu-item" href="/#venue">
                Venue
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="/#sponsors">
                Sponsors
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="mailto:contact@jscamp.ro">
                Contact us
            </a>
        </Menu>
    )
  }
}

export default Burgermenu