import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Platform</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">About Kyle</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://github.com/kmwalcott" className="button special fit">Contribute</a></li>
                
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
