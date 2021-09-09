import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './public.css'
import './habits.css'

class Habit extends Component {
    render() {
        const onPlus = () => {
           this.props.habitevent.habitplus(this.props.habits)
        }
        const onMinus = () => {
            this.props.habitevent.habitminus(this.props.habits)
        }
        const onDelete = (e) => {
            this.props.habitevent.habitDelete(this.props.habits)
        }
        return (
                 <li className="onehabit">
                    <span className="habitcon">{this.props.habits.name}</span>
                    <span className="habit-count count-style">{this.props.habits.count}</span>
                    <i className="habit-plus" onClick={onPlus}>
                        <FontAwesomeIcon icon={faPlusSquare}/>
                    </i>
                    <i className="habit-minus" onClick={onMinus}>
                        <FontAwesomeIcon icon={faMinusSquare}/>
                    </i>
                    <i className="habit-minus" onClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </i>
                </li>
        );
    }
}

export default Habit;