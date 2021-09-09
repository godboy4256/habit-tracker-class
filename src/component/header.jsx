import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import './public.css';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="habit-trackr-header">
                <i className="header-logo-leaf">
                    <FontAwesomeIcon icon={faLeaf}/>
                </i>
                <h1>Habit Tracker</h1>
                <span className="habit-super-count count-style">{
                    this.props.habitsall.filter(item => item.count > 0).length
                }</span>
            </header>
        );
    }
}

export default Header;